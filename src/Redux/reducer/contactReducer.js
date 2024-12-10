/** @format */

import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    contactInquiries: [],
  },
  reducers: {
    setContactInquiries: (state, action) => {
      state.contactInquiries = action.payload;
    },
  },
});

export const { setContactInquiries } = contactSlice.actions;

export default contactSlice.reducer;
