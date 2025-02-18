import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./../pages/AdminTemplate/AuthPage/slice";
import listUserReducer from "./../pages/AdminTemplate/ListUserPage/slice";
import userReducer from "./../pages/AdminTemplate/ListUserPage/AddUser/slice";

export const store = configureStore({
  reducer: {
    authReducer,
    listUserReducer,
    userReducer,
  },
});
