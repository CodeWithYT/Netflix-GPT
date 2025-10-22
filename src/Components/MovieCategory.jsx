import MovieCard from "./MovieCard";

const MovieCategory = ({ movies, title }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white mx-4">{title}</h1>
      <div className="flex  overflow-x-scroll space-x-4 p-4 hide-scrollbar">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieCategory;
