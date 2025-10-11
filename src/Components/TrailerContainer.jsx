import useNowPlaying from "../utils/useNowPlaying";
import Trailer from "./Trailer";

const TrailerContainer = () => {
  const { nowPlaying, loading, error } = useNowPlaying();
  console.log("Now Playing Movies in TrailerContainer:", nowPlaying);
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        nowPlaying && <Trailer movie={nowPlaying[9]} />
      )}
    </>
  );
};

export default TrailerContainer;
