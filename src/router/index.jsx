import React, { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "../layout/App";
import { routes } from "./routes";

const AppRouter = () => {
  return (
    <App>
      <Suspense fallback={<h1>loading....</h1>}>
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            );
          })}
        </Routes>
      </Suspense>
    </App>
  );
};

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <ToastContainer /> */}

        <AppRouter />
      </BrowserRouter>
    </div>
  );
};

export default Router;
