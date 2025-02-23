import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { useEffect } from "react";
import { fetchBoxOfficeList } from "./slice";
import { useParams } from "react-router-dom";
import Seat from "./Seat";
import Square from "../../../components/Square";

export default function BookingTickets() {
  const state = useSelector((state) => state.bookingTicketsReducer);
  const dispath = useDispatch();

  const { data } = state;
  const { id } = useParams();

  console.log(data);

  const row = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  const col = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "K"];

  const listStatus = [
    {
      title: "Ghế bạn chọn",
      color: "bg-green-500",
      className: "flex gap-2",
    },
    {
      title: "Không thể chọn",
      color: "bg-red-500",
      className: "flex gap-2",
    },
    {
      title: "Đã bán",
      color: "bg-blue-500",
      className: "flex gap-2",
    },
  ];

  const renderRowIndex = () => {
    return row.map((row, index) => {
      return (
        <span key={index} className="py-2 px-4 text-red-500">
          {row}
        </span>
      );
    });
  };

  const renderCol = () => {
    return col.map((col, index) => {
      return (
        <span
          key={index}
          className={`${col === "" ? "min-h-[40px]" : ""} ${"py-2 px-3"}`}
        >
          {col}
        </span>
      );
    });
  };

  const renderStatus = () => {
    return (
      <div className="flex justify-center items-center gap-5 py-2 text-white text-sm">
        {listStatus.map((item) => (
          <Square
            key={item.title}
            title={item.title}
            color={item.color}
            className={item.className}
          ></Square>
        ))}
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
            <div className="text-white flex">
              <div className="flex flex-col justify-between items-center">
                {renderCol()}
              </div>
              <div>
                <div className="grid grid-cols-[repeat(16,minmax(0,1fr))] place-items-center gap-1">
                  {renderRowIndex()}
                </div>
                <Seat data={data} />
              </div>
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
