import React, { useContext, useState } from "react";
// import { MovieContext } from "../context/MovieContext";
import Item from "./Item";

const Movie = () => {
  // const { movieList } = useContext(MovieContext);
  const [movieList, setMovieList] = useState([]);

  const fetchMoviesHandler = () => {
    fetch("https://dummyapi.online/api/movies/")
      .then((response) => response.json())
      .then((json) => setMovieList(json));
  };

  return (
    <div>
      Movie
      <button onClick={fetchMoviesHandler}>Fetch</button>
      {movieList.map((el) => (
        <Item key={el.id} movie={el} />
      ))}
    </div>
  );
};

export default Movie;
