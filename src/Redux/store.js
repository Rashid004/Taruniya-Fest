/** @format */

import { configureStore } from "@reduxjs/toolkit";
import users from "./reducer/portalUser";
import announcementReducer from "./reducer/announcementReducer";
import eventReducer from "./reducer/event";

export default configureStore({
  reducer: {
    users: users,
    announcement: announcementReducer,
    event: eventReducer,
  },
});
