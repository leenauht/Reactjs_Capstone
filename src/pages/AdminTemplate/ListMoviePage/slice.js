import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { movieApi } from "../../../services/movieApi";

export const fetchMovieList = createAsyncThunk(
  "listMoviePage/fetchMovieList",
  async (__dirname, { rejectWithValue }) => {
    try {
      const result = await movieApi.getMovieList();
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

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

export const deleteMovie = createAsyncThunk(
  "listMoviePage/deleteMovie",
  async (id, { rejectWithValue }) => {
    try {
      await movieApi.deleteMovie(id);
      return id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data.content || "Lỗi khi xóa phim"
      );
    }
  }
);

const initialState = {
  movies: null,
  movieInfo: null,
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    resetMovieInfo: (state) => {
      state.movieInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovieList.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovieList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchMovieInfo.fulfilled, (state, action) => {
        state.movieInfo = action.payload;
      })
      .addCase(deleteMovie.fulfilled, (state, action) => {
        state.movies = state.movies.filter(
          (movie) => movie.maPhim !== action.payload
        );
      });
  },
});

export const { resetMovieInfo } = movieSlice.actions;
export default movieSlice.reducer;
