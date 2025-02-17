import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./../pages/AdminTemplate/AuthPage/slice";

export const store = configureStore({
  reducer: {
    authReducer,
  },
});
