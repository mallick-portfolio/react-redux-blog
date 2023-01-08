import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Root from "./Root";
import ErrorPage from "./components/404";
import AddBLog from "./components/AddBLog";
import SingleBlog from "./components/SingleBlog";
import Login from "./components/Login";
import BlogList from "./components/BlogList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "add-blog",
        element: <AddBLog />,
      },
      {
        path: "blog/:id",
        element: <SingleBlog />,
      },
      {
        path: "blog-list",
        element: <BlogList />,
      },
      {
        path: "login",
        element: <Login />,
      },
      //   {
      //     element: <AuthLayout />,
      //     children: [
      //       {
      //         path: "login",
      //         element: <Login />,
      //         loader: redirectIfUser,
      //       },
      //       {
      //         path: "logout",
      //         action: logoutUser,
      //       },
      //     ],
      //   },
    ],
  },
]);

export default router;
