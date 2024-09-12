import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/Home/HomePage";
import { App } from "../App";
import { AboutPage } from "../pages/AboutPage/AboutPage";
import { ServicesPage } from "../pages/ServicesPage/ServicesPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { CategoryPage } from "../pages/CategoryPage/CategoryPage";

export const routes = {
  home: "/",
  about: "/aboutus",
  services: "/services",
  login: "/login",
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
      { path: routes.searchCategory, element: <CategoryPage /> },
    ],
  },
]);
