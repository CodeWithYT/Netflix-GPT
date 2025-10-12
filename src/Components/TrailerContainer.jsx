import useNowPlaying from "../utils/useNowPlaying";
import Trailer from "./Trailer";

const TrailerContainer = () => {
  const { nowPlaying, loading, error } = useNowPlaying();
  console.log("Now Playing Movies in TrailerContainer:", nowPlaying);
  const randomIndex =
    nowPlaying && Math.floor(Math.random() * nowPlaying.length);
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        nowPlaying && <Trailer movie={nowPlaying[randomIndex]} />
      )}
    </>
  );
};

export default TrailerContainer;
