import { configureStore } from "@reduxjs/toolkit";

import UserSlice from "../features/user/UserSlice";

const store = configureStore({
  reducer: {
    users: UserSlice,
  },
});

export default store;
