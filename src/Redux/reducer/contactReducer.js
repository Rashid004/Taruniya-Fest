/** @format */

import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact", // Slice name matches the reducer key in the store
  initialState: {
    contactInquiries: [], // Initial state
  },
  reducers: {
    setContactInquiries: (state, action) => {
      state.contactInquiries = action.payload; // Sets the contact inquiries
    },
  },
});

export const { setContactInquiries } = contactSlice.actions;

export default contactSlice.reducer;
