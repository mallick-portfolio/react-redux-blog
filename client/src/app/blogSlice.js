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
    successAddNewBlog: false,
    blog: {},
    showModal: false,
    blogId: null,
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
    setSuccessAddNewBlog: (state, action) => {
      state.successAddNewBlog = action.payload;
    },
    setBlog: (state, action) => {
      state.blog = action.payload;
    },
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
    setBlogId: (state, action) => {
      state.blogId = action.payload;
    },
  },
});

export const {
  setLoading,
  setError,
  setBlogs,
  setShouldRefreshBlog,
  setSuccessAddNewBlog,
  setBlog,
  setShowModal,
  setBlogId,
} = blogSlice.actions;

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

export const singleBlog = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const headers = {
      "content-type": "application/json",
    };
    const response = await axios.get(`${ROOT_API}/blog/${id}`, { headers });
    const res = response.data;
    if (res?.data) {
      dispatch(setBlog(res.data));
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

export const addNewBlog = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const headers = {
      "content-type": "application/json",
    };
    const response = await axios.post(`${ROOT_API}/blog/`, data, { headers });
    const res = response.data;
    if (res?.data) {
      dispatch(setLoading(false));
      dispatch(setSuccessAddNewBlog(true));
    } else {
      dispatch(setLoading(false));
      dispatch(setSuccessAddNewBlog(false));
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
export const updateBlog = (data, id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const headers = {
      "content-type": "application/json",
    };
    const response = await axios.patch(`${ROOT_API}/blog/${id}`, data, {
      headers,
    });
    const res = response.data;
    if (res?.status === "success") {
      dispatch(setLoading(false));
      dispatch(setSuccessAddNewBlog(true));
    } else {
      dispatch(setLoading(false));
      dispatch(setSuccessAddNewBlog(false));
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

export const deleteBlog = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const headers = {
      "content-type": "application/json",
    };
    const response = await axios.delete(`${ROOT_API}/blog/${id}`, { headers });
    const res = response.data;
    if (res?.status === "success") {
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
