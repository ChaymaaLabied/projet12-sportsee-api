import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout";
import App from "./Pages/App";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import userLoader from "./Loader/userLoader";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/user/:id",
          element: <App />,
          loader: userLoader,
          errorElement: <Error/>
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
