import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

const Thumbinal = ({ item }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="group p-2 cursor-pointer transition ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        layout="responsive"
        width={1920}
        height={1080}
        src={
          `${BASE_URL}${item.backdrop_path || item.poster_path}` ||
          `${BASE_URL}${item.poster_path}`
        }
      />

      <div className="p-2">
        <p className="truncate max-w-md">{item.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{item.title || item.original_name}</h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {item.media_type && `${item.media_type} *`}{" "}
          {item.release_date || item.first_air_date} *{" "}
          <ThumbUpIcon className="h-5 mx-2"/>{item.vote_count}
        </p>
      </div>
    </div>
  );
};

export default Thumbinal;
