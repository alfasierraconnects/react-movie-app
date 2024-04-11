import React from "react";

const Item = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const imdbUrl = `https://www.imdb.com/title/${movie.id}`;

  return (
    <div className="rounded-lg bg-gradient-to-t from-sky-950 to-sky-200 overflow-hidden shadow-lg">
      <div className="overflow-hidden">
        <img
          className="w-full hover:scale-125 transition duration-700"
          src={imageUrl}
          alt={movie.title}
        />
      </div>
      <div className="px-6 py-4 flex flex-col justify-between">
        <h2
          className={`font-bold text-xl text-gray-950 mb-2 whitespace-nowrap ${
            movie.title.length > 30 ? "animate-loop-scroll" : ""
          }`}
        >
          {movie.title}
        </h2>

        <div className="flex justify-between">
          <a
            className=" hover:text-blue-700 text-yellow-300 font-medium"
            href={imdbUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            IMDb
          </a>
          <p className="text-gray-200 font-medium">
            <span className="text-lg">{movie.vote_average}</span> / 10
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;
