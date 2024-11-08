/** @format */

import { createSlice } from "@reduxjs/toolkit";

const announcementSlice = createSlice({
  name: "announcement",
  initialState: {
    announcements: [],
    loading: false,
  },
  reducers: {
    setAnnouncementData: (state, action) => {
      state.announcements = action.payload;
      state.loading = false;
    },
    updateAnnouncementData: (state, action) => {
      state.announcements = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setAnnouncementData, updateAnnouncementData, setLoading } =
  announcementSlice.actions;

export default announcementSlice.reducer;
