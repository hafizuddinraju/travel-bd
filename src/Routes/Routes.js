import React from "react";
import { createBrowserRouter } from "react-router-dom";

import AddPlace from "../components/AddPlace/AddPlace";
import AddReview from "../components/AddReview/AddReview";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/Errorpage/ErrorPage.jsx";
import Login from "../components/Login-signup/Login";
import Signup from "../components/Login-signup/Signup";
import MyReview from "../components/MyReview/MyReview";
import Places from "../components/Places/Places";
import UpdateReview from "../components/UpdateReview/UpdateReview";
import ViewPlace from "../components/ViewPlace/ViewPlace";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/places", element: <Places></Places> },
      { path: "/blog", element: <Blog></Blog> },
      {
        path: "/add-place",
        element: (
          <PrivateRoute>
            <AddPlace></AddPlace>
          </PrivateRoute>
        ),
      },
      {
        path: "/myreview",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/place/:id",
        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/place/${params.id}`),
        element: (
          <PrivateRoute>
            <ViewPlace></ViewPlace>
          </PrivateRoute>
        ),
      },
      {
        path: "/review/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/place/${params.id}`),
        element: (
          <PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        // loader: ({params})=> fetch(`http://localhost:5000/review/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateReview></UpdateReview>
          </PrivateRoute>
        ),
      },

      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <Signup></Signup> },
    ],
  },
]);
