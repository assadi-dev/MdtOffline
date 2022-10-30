import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { TOKEN_STORAGE_NAME } from "../constants/localStorage";
import AccesDenied from "../Pages/Permission/AccesDenied";

const RedirectRoutes = ({ allowedGrades }) => {
  const tokenStorage = Cookies.get(TOKEN_STORAGE_NAME);
  const navigate = useNavigate();

  if (tokenStorage) {
    const decode = jwt_decode(tokenStorage);

    const usergrade = decode.categorie.toLowerCase();

    try {
      allowedGrades = allowedGrades.map((grade) => grade.toLowerCase());
      if (allowedGrades.includes(usergrade)) {
        return <Outlet />;
      }
    } catch (error) {
      return navigate("/denied");
    }
  }

  return navigate("/denied");
};

export default RedirectRoutes;
