/** @format */

import { configureStore } from "@reduxjs/toolkit";
import users from "./reducer/portalUser";
import announcementReducer from "./reducer/announcementReducer";

export default configureStore({
  reducer: {
    users: users,
    announcement: announcementReducer,
  },
});
