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
import { useSelector } from "react-redux";

const App = () => {
  const Hello = () => {
    return (
      <div>
        <h1>Page d'accueil</h1>
      </div>
    );
  };

  let tokenStorage = localStorage.getItem("mdtOfflineToken-999");
  const navigate = useNavigate();
  const authSelector = useSelector((state) => state.AuthenticateReducer);

  useEffect(() => {
    if (!tokenStorage && authSelector.isLoggedIn == false) {
      navigate("/connexion");
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
