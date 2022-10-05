import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { TOKEN_STORAGE_NAME } from "../constants/localStorage";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

const ProtectedRoutes = () => {
  let tokenStorage = Cookies.get(TOKEN_STORAGE_NAME);
  if (tokenStorage) {
    const decode = jwt_decode(tokenStorage);
    const expiration = decode.exp;
    /*     if (isTokenExpirate(expiration)) {
      localStorage.removeItem(TOKEN_STORAGE_NAME);
      return <Navigate to="/connexion" replace />;
    } */
  }

  if (!tokenStorage) return <Navigate to="/connexion" replace />;

  return <Outlet />;
};

export default ProtectedRoutes;
