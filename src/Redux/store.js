/** @format */

import { configureStore } from "@reduxjs/toolkit";
import users from "./reducer/portalUser";

export default configureStore({
  reducer: {
    users: users,
  },
});
