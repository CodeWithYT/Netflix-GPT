import { useEffect, useState } from "react";
import { TMDB_API_OPTIONS } from "./constants";

const useMovies = (url) => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch(url, TMDB_API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch popular movies");
      }
      const data = await response.json();
      setMovies(data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { movies, loading, error };
};
export default useMovies;
