/** @format */

import { createSlice } from "@reduxjs/toolkit";

const leaderBoardSlice = createSlice({
  name: "leaderboard",
  initialState: {
    leaderboards: [], // Properly initialized
    isLoading: true,
  },

  reducers: {
    setLeaderboardData: (state, action) => {
      state.leaderboards = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setLeaderboardData } = leaderBoardSlice.actions;
export default leaderBoardSlice.reducer;
