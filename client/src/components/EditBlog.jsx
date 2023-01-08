import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateBlog, singleBlog } from "../app/blogSlice";
import Loading from "./Loading";

const EditBlog = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  const { successAddNewBlog, error, loading, blog } = useSelector(
    (state) => state.blog
  );
  useEffect(() => {
    dispatch(singleBlog(id));
    setData(blog);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(updateBlog(data, id));
  };
  if (successAddNewBlog) {
    navigate("/");
  }
  if (error) {
    return error.message;
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="px-16 mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Blog title
          </label>
          <input
            name="title"
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            value={data.title}
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your blog title"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your message
          </label>
          <textarea
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            value={data.description}
            name="description"
            id="message"
            rows="4"
            required
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your description..."
          ></textarea>
        </div>
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Blog image url
          </label>
          <input
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            value={data.image}
            name="image"
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Blog image url"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
