import React from "react";

const Movie = () => {
  const fetchMoviesHandler = () => {
    fetch("https://dummyapi.online/api/movies/")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div>
      Movie
      <button onClick={fetchMoviesHandler}>Fetch</button>
    </div>
  );
};

export default Movie;
