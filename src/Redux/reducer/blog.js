/** @format */

import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
    loading: false,
  },
  reducers: {
    setBlogData: (state, action) => {
      state.blogs = action.payload;
    },
    updateBlog: (state, action) => {
      state.blogs = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setBlogData, updateBlog, setLoading } = blogSlice.actions;
export default blogSlice.reducer;
