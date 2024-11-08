/** @format */

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
  },
  reducers: {
    setUserData: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },
    updateUserData: (state, action) => {
      state.users = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setUserData, updateUserData, setLoading } = userSlice.actions;

export default userSlice.reducer;
