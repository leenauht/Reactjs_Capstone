import { useState } from "react";
import TheaterComplex from "./TheaterComplex";

export default function Cineme({ data, className }) {
  // console.log("data", data);
  const [toggleTheater, setToggleTheater] = useState(false);

  return (
    <div
      className={`${className} ${"border border-gray-200 cursor-pointer overflow-hidden"}`}
    >
      <div
        onClick={() => setToggleTheater(!toggleTheater)}
        className="p-4 flex gap-5 items-center"
      >
        <img src={data.logo} alt="" className="w-10 h-10" />
        <h3 className="inline-block text-lg font-medium">
          {data.tenHeThongRap}
        </h3>
      </div>

      {toggleTheater &&
        data?.cumRapChieu.map((item) => {
          return <TheaterComplex key={item.maCumRap} theater={item} />;
        })}
    </div>
  );
}
