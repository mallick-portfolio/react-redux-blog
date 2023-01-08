import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singleBlog } from "../app/blogSlice";
import Loading from "./Loading";

const SingleBlog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { blog, error, loading } = useSelector((state) => state.blog);
  useEffect(() => {
    dispatch(singleBlog(id));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  if (error) {
    return error.message;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="px-16 mx-auto">
      <div className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="/">
          <img className="rounded-t-lg mx-auto py-6" src={blog?.image} alt="" />
        </a>
        <div className="p-5">
          <a href="/">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {blog?.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {blog?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
