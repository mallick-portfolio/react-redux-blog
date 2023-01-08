import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ROOT_API } from "../config";
export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    loading: false,
    blogs: [],
    error: null,
    shouldRefreshBlog: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setBlogs: (state, action) => {
      state.blogs = action.payload;
    },
    setShouldRefreshBlog: (state, action) => {
      state.shouldRefreshBlog = action.payload;
    },
  },
});

export const { setLoading, setError, setBlogs, setShouldRefreshBlog } =
  blogSlice.actions;

export default blogSlice.reducer;

export const getBlogs = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const headers = {
      "content-type": "application/json",
    };

    const response = await axios.get(`${ROOT_API}/blog/`, { headers });
    const res = response.data;
    if (res?.data) {
      dispatch(setBlogs(res.data));
      dispatch(setLoading(false));
    } else {
      dispatch(setLoading(false));
      dispatch(
        setError({
          type: "error",
          message: "An unexpected error occured processing your request.",
        })
      );
    }
  } catch (err) {
    if (err.response) {
      dispatch(
        setError({
          type: "error",
          message:
            err.response.data && err.response.data.error
              ? err.response.data.error
              : "Something went wrong...",
        })
      );
    } else {
      dispatch(
        setError({
          type: "error",
          message: "An unexpected error occured processing your request.",
        })
      );
    }
  }
};
