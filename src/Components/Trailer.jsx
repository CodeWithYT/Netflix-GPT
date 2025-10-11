import useTrailer from "../utils/useTrailer";

const Trailer = ({ movie }) => {
  console.log("Movie in Trailer component:", movie);
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
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="absolute bottom-1/4 left-10 ">
        <h1 className="text-white font-bold text-5xl">{movie.title}</h1>
        <p className="text-white text-lg w-1/3  mt-4">{movie.overview}</p>
      </div>
    </div>
  );
};

export default Trailer;
