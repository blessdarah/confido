import { ROUTES } from "../constants/app-routes.constants";
import LoginPage from "../pages/auth/login.page";
import RegisterPage from "../pages/auth/register.page";

const authRoutes = [
  {
    path: ROUTES.AUTH.REGISTER,
    element: <RegisterPage />,
  },
  {
    path: ROUTES.AUTH.LOGIN,
    element: <LoginPage />,
  },
];

export default authRoutes;
