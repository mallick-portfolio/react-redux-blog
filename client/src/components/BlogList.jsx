import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../app/blogSlice";
import Loading from "./Loading";
const BlogList = () => {
  const { blogs, loading, error } = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return error.message;
  }

  let blogItem = "";
  if (blogs.length) {
    blogItem = blogs.map((blog) => (
      <li key={blog?._id} className="py-3 sm:py-4">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img
              className="w-12 h-12 object-cover rounded-full"
              src={blog.image}
              alt="Neil"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xl text-gray-500 truncate dark:text-gray-400">
              {blog.title.slice(0, 60)}...
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Edit
            </button>
            <button
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Delete
            </button>
          </div>
        </div>
      </li>
    ));
  }
  return (
    <>
      <div className="px-16 mx-auto">
        <div className="w-full mx-auto p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Blog list
            </h5>
          </div>
          <div className="flow-root">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {blogItem}
            </ul>
          </div>
        </div>
      </div>
      {/* <DeleteModal /> */}
    </>
  );
};

export default BlogList;
