import { POPULAR_MOVIES } from "../utils/constants";
import useMovies from "../utils/useMovies";
import MovieCategory from "./MovieCategory";

const MoviesContainer = () => {
  const {
    movies: popularMovies,
    loading: popularLoading,
    error: popularError,
  } = useMovies(POPULAR_MOVIES);

  return (
    <div className="bg-black">
      {popularLoading ? (
        <div>Loading...</div>
      ) : popularError ? (
        <div>Error: {error}</div>
      ) : (
        popularMovies && (
          <>
            <MovieCategory movies={popularMovies} title="Popular Movies" />
            <div className="text-white">dwd</div>
          </>
        )
      )}
    </div>
  );
};

export default MoviesContainer;
