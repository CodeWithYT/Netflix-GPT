import { useState } from "react";
import TrailerContainer from "./TrailerContainer";
import MoviesContainer from "./MoviesContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Home = () => {
  const selector = useSelector((store) => store.gptSearch.isGptSearchVisible);
  return (
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
