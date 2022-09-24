import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./styles/global.css";
import "./styles/root.css";
import "./styles/fonts.css";
import "./styles/layout.css";
import MainLayout from "./components/Layout/MainLayout";
import PagesRoutes from "./routes/Pages.routes";
import uniqid from "uniqid";
import Connexion from "./components/Pages/Connexion";
import { useDispatch, useSelector } from "react-redux";
import { get_owner } from "./redux/actions/Authentication.action";
import jwt_decode from "jwt-decode";
import { TOKEN_STORAGE_NAME } from "./constants/localStorage";

const App = () => {
  const Hello = () => {
    return (
      <div>
        <h1>Page d'accueil</h1>
      </div>
    );
  };

  let tokenStorage = localStorage.getItem(TOKEN_STORAGE_NAME);
  const navigate = useNavigate();
  const authSelector = useSelector((state) => state.AuthenticateReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!tokenStorage && authSelector.isLoggedIn == false) {
      navigate("/connexion");
    } else {
      const decode = jwt_decode(tokenStorage);
      const id = decode.id;
      const role = decode.roles.join("-");
      dispatch(get_owner(id, tokenStorage));
    }
  }, [authSelector.isLoggedIn]);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route element={<Hello />} />
        {PagesRoutes.map((page) =>
          page.subNavigation ? (
            <Route key={uniqid()} path={page.path} element={page.element}>
              {page.subNavigation.map((subnav) => (
                <Route
                  key={uniqid()}
                  path={subnav.path}
                  element={subnav.element}
                />
              ))}
            </Route>
          ) : (
            <Route key={uniqid()} path={page.path} element={page.element} />
          )
        )}
      </Route>
      <Route index path="/connexion" element={<Connexion />} />
    </Routes>
  );
};

export default App;
