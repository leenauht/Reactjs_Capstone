import api from "./api";

export const movieApi = {
  getMovieList: () => api.get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"),

  getMovieInfo: (id) => api.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`),

  //   createMovie: (movieData) =>
  //     api.post("/QuanLyPhim/ThemPhimUploadHinh", movieData),

  //   updateMovie: (movieData) =>
  //     api.post("/QuanLyPhim/CapNhatPhimUpload", movieData),

  deleteMovie: (id) => api.delete(`/QuanLyPhim/XoaPhim?MaPhim=${id}`),
};
