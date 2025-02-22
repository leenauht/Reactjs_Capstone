import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const fetchBoxOfficeList = createAsyncThunk(
  "bookingTickets/fetchBoxOfficeList",
  async (id, { rejectWithValue }) => {
    try {
      const result = await api.get(
        `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`
      );
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const bookingTicketsSlice = createSlice({
  name: "detailInfoShowTimeSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBoxOfficeList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBoxOfficeList.fulfilled, (state, action) => {
        (state.loading = false), (state.data = action.payload);
      })
      .addCase(fetchBoxOfficeList.rejected, (state, action) => {
        (state.loading = false), (state.error = action.payload);
      });
  },
});

export default bookingTicketsSlice.reducer;
