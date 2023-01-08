import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBlogs } from "../app/blogSlice";
import Loading from "./Loading";
const Home = () => {
  const dispatch = useDispatch();
  const { error, loading, blogs } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getBlogs());
  }, []);
  if (error) {
    console.log(error);
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="px-16 mx-auto pt-4">
      {blogs.length &&
        blogs.map((blog) => (
          <div
            key={blog._id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <Link to="/">
              {blog?.image && (
                <img className="rounded-t-lg" src={blog?.image} alt="" />
              )}
            </Link>
            <div className="p-5">
              <Link to="/">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {blog?.title}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {blog?.description}
              </p>
              <Link
                to="/"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                </svg>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;
