/** @format */

import { createSlice } from "@reduxjs/toolkit";

const announcementSlice = createSlice({
  name: "announcement",
  initialState: {
    announcements: [],
    loading: true,
  },
  reducers: {
    setAnnouncementData: (state, action) => {
      state.announcements = action.payload; // Must only contain serializable data
      state.loading = false;
    },
  },
});

export const { setAnnouncementData } = announcementSlice.actions;

export default announcementSlice.reducer;
