import { NavLink } from "react-router-dom";

export default function MovieShowtime({ showtime }) {
  // console.log("showtime", showtime);

  const getTime = (time) => {
    const date = new Date(time);

    const hours = date.getHours(); // Lấy giờ
    const minutes = date.getMinutes(); // Lấy phút
    const formattedTime = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}`;
    return formattedTime;
  };
  return (
    <NavLink
      to={`/booking-tickets/${showtime.maLichChieu}`}
      className="text-sm leading-[16px] py-1 rounded-lg border border-gray-950 text-center"
    >
      <p className="">{getTime(showtime.ngayChieuGioChieu)}</p>
      <p className="text-gray-600">{showtime.giaVe / 1000}K</p>
    </NavLink>
  );
}
