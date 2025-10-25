import { useRef, useState } from "react";
import LANGUAGE from "../utils/languageConstants";
import gptResponse from "../utils/gptResponse";
import { SPINNER } from "../utils/constants";

const GptSearchBar = ({ languageSelector }) => {
  const [query, setQuery] = useState("");
  const userInput = useRef("");
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [results, setResults] = useState(null);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const userQuery = userInput.current?.value || "";
    const GPT_QUERY =
      "act as a movie recommendation system and suggest some movies based on the query: " +
      userQuery +
      ". Only give me names of 15 movies with comma seperated like the example result give a head. Example result: bahubali, james bond, chennai express, vikram";
    if (!userQuery.trim()) return;
    try {
      const response = await gptResponse(GPT_QUERY);
      console.log(response);
      setResults(response);
    } catch (err) {
      console.log(err);
      setError("unable to fetch movies");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-1/2 mx-auto mt-8">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={userInput}
          value={query}
          onChange={handleChange}
          placeholder={LANGUAGE[languageSelector]?.searchMoviesUsingGPT}
          className="overflow-ellipsis w-full p-2 pr-24 rounded-md border border-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-violet-600"
        />
        <button
          disabled={loading}
          className={`absolute top-1 right-1 px-4 py-1 rounded-lg text-white font-bold ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : " bg-red-600 cursor-pointer hover:bg-red-700 "
          }`}
        >
          {LANGUAGE[languageSelector]?.Search}
        </button>
      </form>
      <div>
        {loading ? (
          <img
            alt="loading"
            src={SPINNER}
            className="flex justify-center mx-auto h-8 filter invert brightness-0"
          ></img>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default GptSearchBar;
