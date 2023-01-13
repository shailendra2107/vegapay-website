import { lazy } from "react";
import Company from "../pages/Company";
import ContactUs from "../pages/ContactUs";
import Developers from "../pages/Developers";
import Platform from "../pages/Platform";
import Solutions from "../pages/Solutions";
// const Platform = lazy(() => import(`../pages/Platform`));
// const Solutions = lazy(() => import(`../pages/Solutions`));
// const Company = lazy(() => import(`../pages/Company`));
// const Developers = lazy(() => import(`../pages/Developers`));
// const ContactUs = lazy(() => import(`../pages/ContactUs`));

export const routes = [
  {
    path: '/',
    activePath: "/",
    exact: true,
    title: "Platform",
    component: Platform,
  },
  {
    path: '/solutions',
    activePath: "/solutions",
    exact: true,
    title: "Solutions",
    component: Solutions,
  },
  {
    path: '/company',
    activePath: "/company",
    exact: true,
    title: "Company",
    component: Company,
  },
  {
    path: '/developers',
    activePath: "/developers",
    exact: true,
    title: "Developers",
    component: Developers,
  },
  {
    path: '/contact-us',
    activePath: "/contact-us",
    exact: true,
    title: "ContactUs",
    component: ContactUs,
  }
]