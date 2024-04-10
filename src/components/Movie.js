import React, { useState } from "react";
import Item from "./Item";

const Movie = () => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [retryInterval, setRetryInterval] = useState(null);

  const fetchMoviesHandler = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=011730481d7f6f97f9268199745ab366"
      );
      const json = await response.json();
      setMovieList(json.results);
      console.log(json.results);
      setIsLoading(false);
      clearTimeout(retryInterval);
    } catch (error) {
      console.error(error);
      retryFetchingMovies();
    }
  };

  const retryFetchingMovies = () => {
    setIsLoading(true);
    setRetryInterval(
      setTimeout(() => {
        fetchMoviesHandler();
      }, 5000)
    );
  };

  const cancelRetry = () => {
    setIsLoading(false);
    clearTimeout(retryInterval);
  };

  return (
    <div className="container mx-auto p-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={fetchMoviesHandler}
      >
        Fetch
      </button>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-black">
          <div className="animate-spin text-white p-10 text-2xl font-extrabold">
            .
          </div>
          <button
            className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={cancelRetry}
          >
            Cancel
          </button>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {!isLoading && movieList.map((el) => <Item key={el.id} movie={el} />)}
      </div>
    </div>
  );
};

export default Movie;
