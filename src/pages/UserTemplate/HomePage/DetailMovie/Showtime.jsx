import Cineme from "./Cineme";

export default function Showtime({ data }) {
  // const renderTheaterComplex = (data) => {
  //   return data?.cumRapChieu?.map((item) => {
  //     return (
  //       <div
  //         key={item.maCumRap}
  //         className="p-3 border border-gray-200 cursor-pointer"
  //       >
  //         <h3 className="inline-block">{item.tenCumRap}</h3>
  //         <span className="">, {item.diaChi}</span>

  //         <ul>
  //           {item &&
  //             item?.lichChieuPhim.map((showtime) => {
  //               return <li></li>;
  //             })}
  //         </ul>
  //         <div></div>
  //       </div>
  //     );
  //   });
  // };

  const renderTheaterSystem = () => {
    return data?.data?.heThongRapChieu?.map((item, index, array) => {
      return (
        <Cineme
          key={item.maHeThongRap}
          data={item}
          className={`${
            index === 0
              ? "rounded-t-xl"
              : index === array.length - 1
              ? "rounded-b-xl"
              : ""
          }`}
        />
      );
    });
  };

  return <div className="my-5 w-[90%] mx-auto">{renderTheaterSystem()}</div>;
}
