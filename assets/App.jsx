import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./styles/global.css";
import "./styles/root.css";
import "./styles/fonts.css";
import "./styles/layout.css";
import MainLayout from "./components/Layout/MainLayout";
import PagesRoutes from "./routes/Pages.routes";
import uniqid from "uniqid";
import Connexion from "./Pages/Connexion";
import { useDispatch, useSelector } from "react-redux";
import { get_owner } from "./redux/actions/Authentication.action";
import jwt_decode from "jwt-decode";
import { TOKEN_STORAGE_NAME } from "./constants/localStorage";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import { GET_OWNER } from "./redux/types/Authenticate.type";
import Cookies from "js-cookie";
import MDT from "./Pages/MDT";
import NoFoundPage from "./Pages/NoFoundPage";
import { get_allAgent } from "./redux/actions/Agents.action";
import { GenerateRoutes, GenerateSubNavRoutes } from "./routes/GenerateRoutes";
import { getAllCivil } from "./redux/actions/Civil.action";
import AccesDenied from "./Pages/Permission/AccesDenied";

const App = () => {
  const Hello = () => {
    return (
      <div>
        <h1>Page d'accueil Test</h1>
      </div>
    );
  };

  const tokenStorage = Cookies.get(TOKEN_STORAGE_NAME);
  const authSelector = useSelector((state) => state.AuthenticateReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (tokenStorage) {
      const decode = jwt_decode(tokenStorage);
      const id = decode.id;
      const role = decode.roles.join("-");
      const username = decode.username;
      const matricule = decode.matricule;
      const grade = decode.grade;
      const expiration = decode.exp;

      const data = {
        id,
        username,
        role,
        matricule,
        grade,
        token: tokenStorage,
        isLoggedIn: true,
      };

      dispatch({ type: GET_OWNER, payload: data });
      dispatch(get_owner(id));
      dispatch(get_allAgent());
      dispatch(getAllCivil());
    }
  }, [authSelector.isLoggedIn]);

  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<MainLayout />}>
          <Route element={<Hello />} />
          {PagesRoutes.map((page) =>
            page.subNavigation || page.subNavigation.length > 0 ? (
              <Route key={uniqid()} path={page.path} element={page.element}>
                {GenerateSubNavRoutes(page)}
              </Route>
            ) : (
              <Route key={uniqid()} path={page.path} element={page.element} />
            )
          )}
        </Route>
      </Route>
      <Route index path="/connexion" element={<Connexion />} />
      <Route index path="/denied" element={<AccesDenied />} />
      <Route index path="/*" element={<NoFoundPage />} />
    </Routes>
  );
};

export default App;
