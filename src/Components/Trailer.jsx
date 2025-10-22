import useTrailer from "../utils/useTrailer";
import { FaInfo, FaPlay } from "react-icons/fa";

const Trailer = ({ movie }) => {
  const { trailer } = useTrailer(movie.id);

  return (
    <div>
      <div className="relative">
        <iframe
          className="w-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            (trailer ? trailer.key : "") +
            "?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&showinfo=0"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="absolute bottom-1/4 left-10 mx-10">
        <h1 className="text-white font-bold text-5xl">{movie.title}</h1>
        <p className="text-white text-lg w-1/3  mt-4">{movie.overview}</p>
        <button className="px-10 text-lg py-2 my-2 text-black bg-white rounded-lg cursor-pointer hover:bg-white/90">
          <FaPlay className="inline-block" /> Play
        </button>
        <button className="px-10 text-lg py-2 mx-2 text-white bg-gray-600/50 rounded-lg cursor-pointer hover:bg-gray-600/70">
          <FaInfo className="inline-block " /> More Info
        </button>
      </div>
    </div>
  );
};

export default Trailer;
