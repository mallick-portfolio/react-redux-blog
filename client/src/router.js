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
import EditBlog from "./components/EditBlog";

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
        path: "blog-list",
        element: <BlogList />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "edit-blog/:id",
        element: <EditBlog />,
      },
      {
        path: "blog/:id",
        element: <SingleBlog />,
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
