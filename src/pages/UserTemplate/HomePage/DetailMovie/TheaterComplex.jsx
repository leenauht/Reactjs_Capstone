import { useState } from "react";
import MovieShowtime from "./MovieShowtime";

export default function TheaterComplex({ theater }) {
  // console.log("theater", theater);
  const [toggleMovie, setToggleMovie] = useState(false);

  return (
    <div onClick={() => setToggleMovie(!toggleMovie)} className="border">
      <div className="flex gap-3 p-4 font-medium cursor-pointer">
        <h3 className="text-base">{theater.tenCumRap}</h3>
      </div>

      {toggleMovie && (
        <div>
          <p className="pl-4 text-sm text-slate-600">{theater.diaChi}</p>
          <div className="grid grid-cols-6 md:grid-cols-10 lg:grid-cols-[repeat(16,minmax(0,1fr))] gap-1 p-4">
            {theater?.lichChieuPhim.map((item) => {
              return <MovieShowtime key={item.maLichChieu} showtime={item} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
