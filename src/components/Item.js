import React from "react";

const Item = ({ movie }) => {
  return (
    <div className="border rounded overflow-hidden shadow-lg">
      <img className="w-full" src={movie.image} alt={movie.movie} />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{movie.movie}</h2>
        <p className="text-gray-700 text-base">Rating: {movie.rating}</p>
      </div>
      <div className="px-6 pb-4">
        <a
          className="text-blue-500 hover:text-blue-700"
          href={movie.imdb_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          IMDb
        </a>
      </div>
    </div>
  );
};

export default Item;
