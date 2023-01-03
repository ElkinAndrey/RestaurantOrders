import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../router";

const AppRouter = () => {
  return (
    <Routes path="/">
      {routes.map((rout) => (
        <Route
          exact={rout.exact}
          path={rout.path}
          element={rout.element}
          key={rout.path}
        ></Route>
      ))}
    </Routes>
  );
};

export default AppRouter;
