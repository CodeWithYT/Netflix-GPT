import { useSelector } from "react-redux";
import { TOP_RATED_MOVIES } from "../utils/constants";
import { POPULAR_MOVIES } from "../utils/constants";
import LANGUAGE from "../utils/languageConstants";
import useMovies from "../utils/useMovies";
import MovieCategory from "./MovieCategory";
import { TRENDING_MOVIES } from "../utils/constants";
import { NETFLIX_ANIMATION } from "../utils/constants";

const MoviesContainer = () => {
  const selectedLanguage = useSelector((store) => store.config.language);
  const {
    movies: popularMovies,
    loading: popularLoading,
    error: popularError,
  } = useMovies(POPULAR_MOVIES, LANGUAGE[selectedLanguage].popularMovies);
  const {
    movies: topRatedMovies,
    loading: topRatedLoading,
    error: topRatedError,
  } = useMovies(TOP_RATED_MOVIES, LANGUAGE[selectedLanguage].topRatedMovies);
  const {
    movies: trendingMovies,
    loading: trendingLoading,
    error: trendingError,
  } = useMovies(TRENDING_MOVIES, LANGUAGE[selectedLanguage].trendingMovies);

  return (
    <div className="bg-black">
      {popularLoading || topRatedLoading || trendingLoading ? (
        <div>
          <video
            className="w-screen h-screen"
            autoPlay
            loop
            muted
            src={NETFLIX_ANIMATION}
          ></video>
        </div>
      ) : popularError || topRatedError || trendingError ? (
        <div>Error: {error}</div>
      ) : (
        popularMovies &&
        topRatedMovies && (
          <>
            <MovieCategory
              movies={popularMovies}
              title={LANGUAGE[selectedLanguage].popularMovies}
            />
            <MovieCategory
              movies={topRatedMovies}
              title={LANGUAGE[selectedLanguage].topRatedMovies}
            />
            <MovieCategory
              movies={trendingMovies}
              title={LANGUAGE[selectedLanguage].trendingMovies}
            />
          </>
        )
      )}
    </div>
  );
};

export default MoviesContainer;
