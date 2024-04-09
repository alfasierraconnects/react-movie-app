import React from "react";

const Item = ({ movie }) => {
  return (
    <div>
      <img src={movie.image} alt={movie.movie} />
      <h2>{movie.movie}</h2>
      <p>Rating: {movie.rating}</p>
      <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">
        IMDb
      </a>
    </div>
  );
};

export default Item;
