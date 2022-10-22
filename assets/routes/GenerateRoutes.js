import React from "react";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import uniqid from "uniqid";
import { Route } from "react-router-dom";

export const GenerateSubNavRoutes = (route) => {
  /*   if (route.subNavigation.length > 0) {
    route.subNavigation.forEach((subRoute) => {
     GenerateSubNavRoutes(subRoute);
    });
  }
 */
  return (
    <>
      {route.subNavigation || route.subNavigation.length > 0 ? (
        route.subNavigation.map((subnav) =>
          subnav.subNavigation ? (
            <Route
              key={uniqid()}
              path={subnav.path}
              element={subnav.element}
              index={subnav.index}
            >
              {GenerateSubNavRoutes(subnav)}
            </Route>
          ) : (
            <Route
              key={uniqid()}
              path={subnav.path}
              element={subnav.element}
              index={subnav.index}
            />
          )
        )
      ) : (
        <Route
          key={uniqid()}
          path={route.path}
          element={route.element}
          index={route.index}
        />
      )}
    </>
  );
};
