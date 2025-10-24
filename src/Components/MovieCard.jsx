const MovieCard = ({ movie }) => {
  return (
    <div className="flex-shrink-0 w-36">
      <img
        className="rounded-md object-cover hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      {/* <h2 className="text-white">{movie.title}</h2> */}
    </div>
  );
};

export default MovieCard;
