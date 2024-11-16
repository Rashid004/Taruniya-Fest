/** @format */

import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
  name: "event",
  initialState: {
    events: [],
    isLoading: true,
  },
  reducers: {
    setEvents: (state, action) => {
      state.events = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setEvents } = eventSlice.actions;

export default eventSlice.reducer;
