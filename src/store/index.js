import { configureStore } from "@reduxjs/toolkit";
import listMovieReducer from "../pages/UserTemplate/HomePage/ShowingMovie/slice";
// import detaiMovieReducer from "../pages/UserTemplate/HomePage/DetailMovie/sliceInfoFilm";
import detailInfoShowTimeReducer from "../pages/UserTemplate/HomePage/DetailMovie/sliceInfoShowTime";
import signInReducer from "../pages/UserTemplate/SignIn/slice";
import signUpReducer from "../pages/UserTemplate/SignUp/slice";

import movieShowtimeInfo from "../pages/UserTemplate/BookingTickets/slice";

export const store = configureStore({
  reducer: {
    // Add your child reducers here
    listMovieReducer,
    // detaiMovieReducer,
    detailInfoShowTimeReducer,
    signInReducer,
    signUpReducer,
    movieShowtimeInfo,
  },
});
