import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div className="bg-black min-h-screen pt-24">
      <h1 className="text-white text-3xl font-bold mb-4 text-center">
        GPT Movie Search
      </h1>
      <GptSearchBar />
    </div>
  );
};

export default GptSearch;
