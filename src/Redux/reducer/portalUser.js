/** @format */

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: true,
  },
  reducers: {
    setUserData: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
