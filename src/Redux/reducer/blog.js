/** @format */

import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
    loading: true,
  },
  reducers: {
    setBlogData: (state, action) => {
      return { ...state, blogs: action.payload, loading: false };
    },
  },
});

export const { setBlogData } = blogSlice.actions;
export default blogSlice.reducer;
