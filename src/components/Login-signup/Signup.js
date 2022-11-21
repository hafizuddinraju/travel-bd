import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { SiGnuprivacyguard } from "react-icons/si";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { Link, useNavigate } from "react-router-dom";
import { AuthDataContext } from "../../UseContext/AuthContext";
import "./login.css";
import { toast } from "react-toastify";
import { apiToken } from "../../utlits/apitoken";
import useTitle from "../../costomHooks/hooks";

const Signup = () => {
  const {createUser, userProfile,gitHubLogin,setSign, googleLogin} = useContext(AuthDataContext);
  
  const [showPass, setShowPass] = useState(false)
  const navigate = useNavigate();
  useTitle('Signup')
  const providerGoogle = new GoogleAuthProvider();
  const providerGitHub = new GithubAuthProvider();
  
  // Google signup
  const Google =()=>{
    googleLogin(providerGoogle)
  .then(result =>{
    const user = result.user
    apiToken(user)
    navigate('/')
    toast.success('Login Successfull', {autoClose:500})

  })
  .catch(error =>{
    
    toast.error(`${error}`, {autoClose:500})
  })

  }

  // Git hub signup
  const Github = ()=>{
    gitHubLogin(providerGitHub)
    .then(result =>{
      const user = result.user 
      apiToken(user)
      toast.success('Signup Success', {autoClose:500})
      navigate('/')

    })
    .catch(error =>{
      toast.error(`${error}`, {autoClose:500})
    })

  }
  

 //user signup
  const handleSubmit =(event)=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;


    if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
      toast.error("Please Enter two Upper Case", {autoClose:500})
      return;

      }
      if(password.length <6){
          toast.error('Minimum 6 digit Password', {autoClose:500})
          return
      }
      if(!/(?=.*[!@#$&*])/.test(password)){
          toast.error("Please provide specal key", {autoClose:500})
          return
      }
      

    createUser(email, password)
    .then(result =>{
      const user = result.user;
      apiToken(user)
      updateProfile(name, photoURL)
      form.reset();
      navigate('/')
      toast.success('Account Create Successfull')

    })
    .catch(error =>{
       toast.error(`${error}`, {autoClose:500})
    })
    
  }
  const updateProfile =(name, photoURL)=>{
    const profile ={
      displayName : name,
      photoURL:photoURL
    }
    userProfile(profile)
    .then(()=>{
      setSign(profile)
    })
    .catch(error => toast.error(`${error}`, {autoClose:500}))

  }
  return (
    <div className="login-container">
      <div className="login-title">Sign up <SiGnuprivacyguard /></div>
      <form onSubmit={handleSubmit} className="login-form">
        <input type="text" required name="name" placeholder="Your Name" />
        <input type="text" required name="photoURL" placeholder="Your photoURL" />
        <input type="email" required name="email" placeholder="Your Email" />
        <div className="relative">
        <input type={showPass? 'text':'password'} required name="password" placeholder="password" />
        <div className="absolute right-5 top-5" onClick={() => setShowPass(!showPass)}>
            {showPass ? <AiFillEyeInvisible /> : <AiFillEye />}
          </div>
        </div>

        

        <button>Sign up</button>
        <div className="flex justify-center  space-x-4">
		<button onClick={Google} aria-label="Log in with Google" className="rounded-sm">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-1/2 mx-auto h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
		</button>
		
		<button onClick={Github} aria-label="Log in with GitHub" className="p-3 rounded-sm">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-1/2 mx-auto h-5 fill-current">
				<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
			</svg>
		</button>
	      </div>
        <p className="text-center text-base mt-2 font-medium">All ready account? <Link to='/login'><small className="text-sky-500">LogIn</small></Link></p>
       
        

      </form>
    </div>
  );
};

export default Signup;
