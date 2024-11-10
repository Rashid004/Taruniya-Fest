/** @format */

import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
  name: "event",
  initialState: {
    events: [],
    isLoading: false,
  },
  reducers: {
    setEvents: (state, action) => {
      state.events = action.payload;
    },
    updateEvents: (state, action) => {
      state.events = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setEvents, updateEvents, setIsLoading } = eventSlice.actions;

export default eventSlice.reducer;
