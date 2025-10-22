import { TOP_RATED_MOVIES } from "../utils/constants";
import { POPULAR_MOVIES } from "../utils/constants";
import useMovies from "../utils/useMovies";
import MovieCategory from "./MovieCategory";

const MoviesContainer = () => {
  const {
    movies: popularMovies,
    loading: popularLoading,
    error: popularError,
  } = useMovies(POPULAR_MOVIES, "Popular");
  const {
    movies: topRatedMovies,
    loading: topRatedLoading,
    error: topRatedError,
  } = useMovies(TOP_RATED_MOVIES, "Top Rated");

  return (
    <div className="bg-black">
      {popularLoading || topRatedLoading ? (
        <div>Loading...</div>
      ) : popularError || topRatedError ? (
        <div>Error: {error}</div>
      ) : (
        popularMovies &&
        topRatedMovies && (
          <>
            <MovieCategory movies={popularMovies} title="Popular Movies" />
            <MovieCategory movies={topRatedMovies} title="Top Rated" />
          </>
        )
      )}
    </div>
  );
};

export default MoviesContainer;
