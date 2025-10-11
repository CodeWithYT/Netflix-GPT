import { useEffect, useState } from "react";
import { TMDB_API_OPTIONS } from "./constants";

const useTrailer = (id) => {
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    fetchTrailer();
  }, [id]);

  const fetchTrailer = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-IN`,
      TMDB_API_OPTIONS
    );
    const data = await response.json();
    console.log("Fetched Trailer Data:", data.results);
    const trailerList =
      data.results && data.results.filter((item) => item.type === "Trailer");
    setTrailer(trailerList.length ? trailerList[0] : data.results[0]);
    console.log("Trailer Data:", trailerList);
  };
  return { trailer };
};

export default useTrailer;
