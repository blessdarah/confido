import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home.page";
import { ROUTES } from "./constants/app-routes.constants";
import { RecoilRoot } from "recoil";
import authRoutes from "./routes/auth.routes";
import { ConfigProvider } from "antd";

function App() {
  const router = createBrowserRouter([
    {
      path: ROUTES.HOME,
      element: <HomePage />,
    },
    ...authRoutes,
  ]);

  return (
    <React.StrictMode>
      <RecoilRoot>
        <ConfigProvider componentSize="large">
          <RouterProvider router={router} />
        </ConfigProvider>
      </RecoilRoot>
    </React.StrictMode>
  );
}

export default App;
