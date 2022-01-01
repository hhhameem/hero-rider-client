import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateUserRoute = ({ children }) => {
  let userLoggedIn = localStorage.getItem("userLoggedIn");
  let location = useLocation();

  if (!userLoggedIn) {
    return <Navigate to='/user-login' state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateUserRoute;
<h1>ok</h1>;
