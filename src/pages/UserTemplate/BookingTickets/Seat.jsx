export default function Seat({ data }) {
  console.log("data", data);

  return (
    <div className="text-white grid grid-cols-[repeat(16,minmax(0,1fr))]">
      {data?.danhSachGhe.map((seat) => {
        return (
          <span key={seat.maGhe} className="py-2 px-4">
            {seat.tenGhe}
          </span>
        );
      })}
    </div>
  );
}
