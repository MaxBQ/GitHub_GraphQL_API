import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../components/Layout";
import { lazy } from "react";
const Repositories = lazy(() => import("../pages/Repositories"));
const Repository = lazy(() => import("../pages/Repository"));

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Repositories />,
      },
      {
        path: "/repository",
        element: <Repository />,
      },
    ],
  },
]);
