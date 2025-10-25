import { useEffect, useState } from "react";
import TrailerContainer from "./TrailerContainer";
import MoviesContainer from "./MoviesContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import { NETFLIX_ANIMATION } from "../utils/constants";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const selector = useSelector((store) => store.gptSearch.isGptSearchVisible);
  useEffect(() => {
    const offTimer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(offTimer);
  }, []);
  return loading ? (
    <video
      className="w-screen h-screen object-cover"
      autoPlay
      loop
      muted
      src={NETFLIX_ANIMATION}
    ></video>
  ) : (
    <div>
      {selector ? (
        <GptSearch />
      ) : (
        <>
          <TrailerContainer />
          <MoviesContainer />
        </>
      )}
    </div>
  );
};

export default Home;
