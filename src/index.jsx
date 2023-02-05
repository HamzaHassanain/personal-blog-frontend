import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import BlogsPage from "./pages/BlogsPage";
import SingleBlog from "./pages/SingleBlog";
import AboutPage from "./pages/AboutPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <BlogsPage />,
      },
      {
        path: "blogs/:id",
        element: <SingleBlog />,
      },
      {
        path: "about/",
        element: <AboutPage />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
