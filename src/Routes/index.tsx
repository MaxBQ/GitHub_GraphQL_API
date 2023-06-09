import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const Layout = lazy(() => import("../modules/Layout"));
const RepositoriesPage = lazy(() => import("../pages/RepositoriesPage"));
const RepositoryPage = lazy(() => import("../pages/RepositoryPage"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <RepositoriesPage />,
      },
      {
        path: "/:owner/:name",
        element: <RepositoryPage />,
      },
    ],
  },
]);
