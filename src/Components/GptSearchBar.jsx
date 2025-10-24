import LANGUAGE from "../utils/languageConstants";

const GptSearchBar = ({ languageSelector }) => {
  return (
    <div className="relative w-1/2 mx-auto mt-8">
      <form>
        <input
          type="text"
          placeholder={LANGUAGE[languageSelector]?.searchMoviesUsingGPT}
          className="overflow-ellipsis w-full p-2 pr-24 rounded-md border border-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-violet-600"
        />
        <button className="absolute top-1 right-1 px-4 py-1 rounded-lg bg-red-600 text-white cursor-pointer hover:bg-red-700 font-bold">
          {LANGUAGE[languageSelector]?.Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
