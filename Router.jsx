import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./src/Components/Layout";
import App from "./src/Pages/App";
import Home from "./src/Pages/Home"
import Error from "./src/Pages/Error";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      Children: [
        {
            path: "/user/id",
            element: <App />,
        },
        {
          index: true,
          element: <Home/>,
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
