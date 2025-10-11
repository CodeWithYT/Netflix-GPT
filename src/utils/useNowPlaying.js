import { useState, useEffect } from "react";
import { NOWPLAYING } from "./constants";
import { TMDB_API_OPTIONS } from "./constants";

const useNowPlaying = () => {
  const [loading, setLoading] = useState(false);
  const [nowPlaying, setNowPlaying] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchNowPlaying();
  }, []);
  const fetchNowPlaying = async () => {
    setLoading(true);
    try {
      const response = await fetch(NOWPLAYING, TMDB_API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch now playing movies");
      }
      const data = await response.json();
      setNowPlaying(data.results);
      console.log("Now Playing Data:", data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { nowPlaying, loading, error };
};

export default useNowPlaying;
