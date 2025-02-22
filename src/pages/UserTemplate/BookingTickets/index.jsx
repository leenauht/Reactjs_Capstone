import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { useEffect } from "react";
import { fetchBoxOfficeList } from "./slice";
import { useParams } from "react-router-dom";
import Seat from "./Seat";

export default function BookingTickets() {
  const state = useSelector((state) => state.bookingTicketsReducer);
  const dispath = useDispatch();

  const { data } = state;
  const { id } = useParams();

  console.log(data);

  const row = ["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  const col = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K"];

  const renderRowIndex = () => {
    return row.map((row, index) => {
      return (
        <span key={index} className="py-2 px-4">
          {row}
        </span>
      );
    });
  };

  const renderCol = () => {
    return col.map((col, index) => {
      return (
        <span key={index} className="py-2 px-3">
          {col}
        </span>
      );
    });
  };

  const renderStatus = () => {
    return (
      <div className="flex justify-center items-center gap-5 py-2 text-white text-sm">
        <div className="flex gap-1 items-center">
          <p className="w-5 h-5 bg-green-500 rounded"></p>
          <span>Ghế bạn chọn</span>
        </div>
        <div className="flex gap-1 items-center">
          <p className="w-5 h-5 bg-red-500 rounded"></p>
          <span>Không thể chọn</span>
        </div>
        <div className="flex gap-1 items-center">
          <p className="w-5 h-5 bg-blue-500 rounded"></p>
          <span>Đã bán</span>
        </div>
      </div>
    );
  };

  useEffect(() => {
    dispath(fetchBoxOfficeList(id));
  }, []);

  return (
    <div className="text-center pt-28 pb-10 h-auto w-screen bg-cover bg-[url('https://channel.mediacdn.vn/428462621602512896/2022/12/13/photo-1-1670919944633429479331.jpg')]">
      <h1 className="uppercase text-white font-bold text-3xl">
        Movie Seat Selection
      </h1>
      <div className="w-[96%] mx-auto md:w-[90%] bg-bg-opacity-4 my-10">
        <div className="p-1 pt-4 md:flex md:p-5 gap-5">
          <div className="w-full md:w-[70%] text-left">
            {renderStatus()}
            <div className="py-1 w-full bg-slate-300 clip-path-custom text-center uppercase font-bold">
              Màn hình
            </div>
            <div className="text-white mt-4 flex justify-between">
              {renderRowIndex()}
            </div>
            <div className="text-white flex justify-between">
              <div className="flex flex-col">{renderCol()}</div>
              <Seat data={data} />
            </div>
          </div>
          <div className="w-full mt-5 md:mt-0 md:w-[30%]">
            <h2 className="text-white text-2xl font-bold pb-10">
              Danh sách ghế bạn chọn
            </h2>
            <div className="space-y-5"></div>

            <h2 className="text-white my-5 text-xl font-semibold">
              Ghế đang chọn
            </h2>
            <div></div>
            <div className="pt-5 text-white font-medium text-lg">Total:</div>
          </div>
        </div>
      </div>
    </div>
  );
}
