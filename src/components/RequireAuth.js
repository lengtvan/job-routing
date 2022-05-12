import React from "react";
import { Navigate } from "react-router";
import { useLocation } from "react-router";
import useAuth from "../contexts/useAuth";

const RequireAuth = ({ children }) => {
  const { isAuthenticated } = useAuth();
  let location = useLocation();
  console.log(location);
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
