import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { movieApi } from "../../../../";

export const fetchMovieInfo = createAsyncThunk(
  "movie/fetchMovieInfo",
  async (id, { rejectWithValue }) => {
    try {
      const response = await movieApi.getMovieInfo(id);
      return response.data.content;
    } catch (error) {
      return rejectWithValue(
        error.response?.data.content || "Lỗi khi lấy thông tin phim"
      );
    }
  }
);

// export const createMovie = createAsyncThunk(
//   "movie/createMovie",
//   async (movieData, { rejectWithValue }) => {
//     try {
//       await movieApi.createMovie(movieData);
//     } catch (error) {
//       return rejectWithValue(error.response?.data || "Lỗi khi thêm phim");
//     }
//   }
// );

// export const updateMovie = createAsyncThunk(
//   "movie/updateMovie",
//   async (movieData, { rejectWithValue }) => {
//     try {
//       await movieApi.updateMovie(movieData);
//     } catch (error) {
//       return rejectWithValue(error.response?.data || "Lỗi khi cập nhật phim");
//     }
//   }
// );
