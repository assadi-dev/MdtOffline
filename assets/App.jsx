import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./styles/global.css";
import "./styles/root.css";
import "./styles/fonts.css";
import "./styles/layout.css";
import MainLayout from "./components/Layout/MainLayout";
import PagesRoutes from "./routes/Pages.routes";
import uniqid from "uniqid";

const App = () => {
  const Hello = () => {
    return (
      <div>
        <h1>Page d'accueil</h1>
      </div>
    );
  };

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Hello />} />
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
    </Routes>
  );
};

export default App;
