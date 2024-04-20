import Login from "../pages/loginPage";
import HomePage from "../pages/navBarHome";
import { Navigate } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";

const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default routes;
