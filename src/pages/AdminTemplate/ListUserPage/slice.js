import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../services/api";

export const actGetListUser = createAsyncThunk(
  "listUser/actGetListUser",
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.get(
        "QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP08"
      );
      return result.data.content.map((user) => {
        return {
          ...user,
          maLoaiNguoiDung:
            user.maLoaiNguoiDung === "QuanTri" ? "Quản Trị" : "Khách Hàng",
        };
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`QuanLyNguoiDung/XoaNguoiDung/?TaiKhoan=${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const listUserSlice = createSlice({
  name: "listUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actGetListUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(actGetListUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(actGetListUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (user) => user.taiKhoan !== action.payload
        );
      });
  },
});

export default listUserSlice.reducer;
