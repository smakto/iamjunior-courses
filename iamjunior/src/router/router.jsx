import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/Home/HomePage";
import { App } from "../App";
import { AboutPage } from "../pages/AboutPage/AboutPage";
import { ServicesPage } from "../pages/ServicesPage/ServicesPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { CategoryPage } from "../pages/CategoryPage/CategoryPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";

export const routes = {
  home: "/",
  about: "/aboutus",
  services: "/services",
  login: "/login",
  register: "/register",
  searchCategory: "/search/:category",
};

export const router = createBrowserRouter([
  {
    path: routes.home,
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: routes.about, element: <AboutPage /> },
      { path: routes.services, element: <ServicesPage /> },
      { path: routes.login, element: <LoginPage /> },
      { path: routes.register, element: <RegisterPage /> },
      { path: routes.searchCategory, element: <CategoryPage /> },
    ],
  },
]);
