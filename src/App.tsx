import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home.page";
import { ROUTES } from "./constants/app-routes.constants";
import { RecoilRoot } from "recoil";

function App() {
  const router = createBrowserRouter([
    {
      path: ROUTES.HOME,
      element: <HomePage />,
    },
  ]);
  return (
    <React.StrictMode>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </React.StrictMode>
  );
}

export default App;
