import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { TOKEN_STORAGE_NAME } from "../constants/localStorage";
import jwt_decode from "jwt-decode";
import { isTokenExpirate } from "../service/UserConnect";

const ProtectedRoutes = () => {
  let tokenStorage = localStorage.getItem(TOKEN_STORAGE_NAME);
  if (tokenStorage) {
    const decode = jwt_decode(tokenStorage);
    const expiration = decode.exp;
    if (true) return <Navigate to="/connexion" replace />;
  }

  if (!tokenStorage) return <Navigate to="/connexion" replace />;

  return <Outlet />;
};

export default ProtectedRoutes;
