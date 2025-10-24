import GptSearchBar from "./GptSearchBar";
import LANGUAGE from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearch = () => {
  const languageSelector = useSelector((store) => store.config.language);
  return (
    <div className="bg-black min-h-screen pt-24">
      <h1 className="text-white text-3xl font-bold mb-4 text-center">
        {LANGUAGE[languageSelector]?.gptMovieSearch}
      </h1>
      <GptSearchBar languageSelector={languageSelector} />
    </div>
  );
};

export default GptSearch;
