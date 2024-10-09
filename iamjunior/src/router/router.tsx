import { createBrowserRouter, RouteObject } from "react-router-dom";
import { HomePage } from "../pages/Home/HomePage";
import { AboutPage } from "../pages/AboutPage/AboutPage";
import { ServicesPage } from "../pages/ServicesPage/ServicesPage";
import { LoginPage } from "../pages/authPages/LoginPage/LoginPage";
import { CategoryPage } from "../pages/CategoryPage/CategoryPage";
import { RegisterPage } from "../pages/authPages/RegisterPage/RegisterPage";
import { HeaderLayout } from "../layouts/HeaderLayout/HeaderLayout";
import BusinessPage from "../pages/BusinessPage/BusinessPage";

export const routes = {
  home: "/",
  about: "/aboutus",
  services: "/services",
  login: "/login",
  register: "/register",
  searchCategory: "/search/:category",
  businessPage: "/business/:id",
  account: "/account",
  bookings: "/bookings",
};

export const router = createBrowserRouter([
  {
    path: routes.home,
    element: <HeaderLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: routes.about, element: <AboutPage /> },
      { path: routes.services, element: <ServicesPage /> },
      { path: routes.login, element: <LoginPage /> },
      { path: routes.register, element: <RegisterPage /> },
      { path: routes.searchCategory, element: <CategoryPage /> },
      { path: routes.businessPage, element: <BusinessPage /> },
    ],
  },
]);
