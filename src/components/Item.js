import React from "react";

const Item = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const imdbUrl = `https://www.imdb.com/title/${movie.id}`;

  return (
    <div className="border rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageUrl} alt={movie.title} />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{movie.title}</h2>
        <p className="text-gray-700 text-base">Rating: {movie.vote_average}</p>
      </div>
      <div className="px-6 pb-4">
        <a
          className="text-blue-500 hover:text-blue-700"
          href={imdbUrl}
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
