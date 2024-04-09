import React, { useState } from "react";
import Item from "./Item";

const Movie = () => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [retryInterval, setRetryInterval] = useState(null);

  const fetchMoviesHandler = () => {
    setIsLoading(true);
    fetch("https://dummyapi.online/api/movies/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => {
        setMovieList(json);
        setIsLoading(false);
        clearTimeout(retryInterval); // Clear retry interval if fetch is successful
      })
      .catch((error) => {
        retryFetchingMovies();
      });
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
