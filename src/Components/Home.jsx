import { useEffect } from "react";
import useNowPlaying from "../utils/useNowPlaying";
import TrailerContainer from "./TrailerContainer";
import MoviesContainer from "./MoviesContainer";

const Home = () => {
  return (
    <div>
      <TrailerContainer />
      <MoviesContainer />
    </div>
  );
};

export default Home;
