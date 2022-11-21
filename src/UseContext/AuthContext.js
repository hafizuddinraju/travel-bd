import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";

export const AuthDataContext = createContext();
const auth = getAuth(app);

const AuthContext = ({ children }) => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [spinner, setSpinner] = useState(true);
  const [update, setUdate] = useState(false);
  const [sign, setSign] = useState({});

  // places data load

  useEffect(() => {
    fetch("http://localhost:5000/places")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setSpinner(false);
      });
  }, [update]);

  // user signup function
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Google Login function
  const googleLogin = (Provider) => {
    setLoading(true);
    return signInWithPopup(auth, Provider);
  };

  // Git hub Login function
  const gitHubLogin = (Provider) => {
    setLoading(true);
    return signInWithPopup(auth, Provider);
  };
  // user profile function
  const userProfile = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };
  // logout function
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // user Login function
  const loginAccount = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      return () => {
        unsubcribe();
      };
    });
  }, [sign]);
  const authinfo = {
    user,
    setSign,
    spinner,
    setLoading,
    loading,
    setUdate,
    update,
    loginAccount,
    gitHubLogin,
    data,
    createUser,
    userProfile,
    logOut,
    googleLogin,
  };
  return (
    <AuthDataContext.Provider value={authinfo}>
      {children}
    </AuthDataContext.Provider>
  );
};

export default AuthContext;
