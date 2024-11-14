/** @format */

import { createSlice } from "@reduxjs/toolkit";

const leaderBoardSlice = createSlice({
  name: "leaderboards",
  initialState: {
    leaderboards: [], // Updated to use 'leaderboards' consistently
    isLoading: true,
  },
  reducers: {
    setLeaderboardData: (state, action) => {
      state.leaderboards = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLeaderboardData, setIsLoading } = leaderBoardSlice.actions;

export default leaderBoardSlice.reducer;
