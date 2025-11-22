import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import settingsSlice from "./settingsSlice";
import cartSlice from "./cartSlice";

export default configureStore({
  reducer: {
    userSlice,
    settingsSlice,
    cartSlice,
  },
});
