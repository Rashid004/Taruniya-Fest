/** @format */

import { configureStore } from "@reduxjs/toolkit";
import users from "./reducer/portalUser";
import announcementReducer from "./reducer/announcementReducer";
import eventReducer from "./reducer/event";
import blogReducer from "./reducer/blog";
import leaderBoardReducer from "./reducer/leaderboard";

export default configureStore({
  reducer: {
    users: users,
    announcement: announcementReducer,
    event: eventReducer,
    blog: blogReducer,
    leaderboard: leaderBoardReducer,
  },
});
