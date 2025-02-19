import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { fetchDetailMovie } from "./sliceInfoFilm";
import Loading from "../../../../components/Loading";
import { fetchShowTimeInfo } from "./sliceInfoShowTime";

export default function DetailMovie() {
  const dispath = useDispatch();
  // const state = useSelector((state) => state.detaiMovieReducer);
  const state = useSelector((state) => state.detailInfoShowTimeReducer);
  const { data } = state;
  const { id } = useParams();

  const getYouTubeVideoId = (url) => {
    const regex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  useEffect(() => {
    // dispath(fetchDetailMovie(id));
    dispath(fetchShowTimeInfo(id));
  }, []);

  if (state.loading) return <Loading open={state.loading} />;

  return (
    <div className="w-screen h-auto object-cover bg-[url('https://channel.mediacdn.vn/428462621602512896/2022/12/13/photo-1-1670919944633429479331.jpg')]">
      <div className="w-full h-full bg-bg-opacity-1">
        <div className="mx-auto">
          <h2 className="border-b-2 h-full max-w-[80%] mx-auto pt-[100px] text-center mb-5 text-xl text-orange-500 border-orange-500 p-2 font-bold">
            Nội dung phim
          </h2>
          <div className="grid md:grid-cols-2 h-full max-w-[94%] md:max-w-[960px] mx-auto">
            <div className="flex justify-center">
              {data && (
                <img
                  className="w-2/3 h-[480px] rounded-xl object-cover"
                  src={data.hinhAnh}
                  alt=""
                />
              )}
            </div>
            <div className="text-white space-y-3">
              {data && (
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold">{data.tenPhim}</h2>
                  <p className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M5.616 21q-.691 0-1.153-.462T4 19.385V6.615q0-.69.463-1.152T5.616 5h1.769V2.77h1.077V5h7.154V2.77h1V5h1.769q.69 0 1.153.463T20 6.616v12.769q0 .69-.462 1.153T18.384 21zm0-1h12.769q.23 0 .423-.192t.192-.424v-8.768H5v8.769q0 .23.192.423t.423.192"
                      />
                    </svg>
                    <span>{data.ngayKhoiChieu}</span>
                  </p>
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 text-yellow-300 me-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <p className="ms-2 text-sm font-bold text-white">
                      {data.danhGia}
                    </p>

                    <span className="w-1 h-1 mx-1.5 bg-white rounded-full dark:bg-gray-400" />
                    <a
                      href="#"
                      className="text-sm font-medium text-white underline hover:no-underline dark:text-white"
                    >
                      73 reviews
                    </a>
                    <NavLink
                      onClick={() => getMaLichChieu(1000)}
                      to="/booking-tickets"
                    >
                      <button className="ml-20 px-5 py-2 bg-red-600  hover:bg-red-800 font-medium rounded-lg text-sm">
                        Đặt vé
                      </button>
                    </NavLink>
                  </div>
                  <p>{data.moTa}</p>
                  <div className="pb-5 space-y-3">
                    <div className="flex gap-10 pt-3">
                      Trailer
                      <iframe
                        className="rounded-xl"
                        width={360}
                        height={200}
                        src={`https://www.youtube.com/embed/${getYouTubeVideoId(
                          data.trailer
                        )}`}
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
