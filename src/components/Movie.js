import React, { useState } from "react";
import Item from "./Item";

const Movie = () => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoviesHandler = () => {
    setIsLoading(true);
    fetch("https://dummyapi.online/api/movies/")
      .then((response) => response.json())
      .then((json) => {
        setMovieList(json);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error fetching movies:", error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={fetchMoviesHandler}
      >
        Fetch
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-black">
            <div className="animate-spin text-white p-10 text-2xl font-extrabold">
              .
            </div>
          </div>
        )}
        {!isLoading && movieList.map((el) => <Item key={el.id} movie={el} />)}
      </div>
    </div>
  );
};

export default Movie;
