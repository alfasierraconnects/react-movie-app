import { createContext } from "react";

export const MovieContext = createContext(null);

const MovieContextProvider = (props) => {
  const movieList = [
    {
      id: 1,
      movie: "The Shawshank Redemption",
      rating: 9.2,
      image: "images/shawshank.jpg",
      imdb_url: "https://www.imdb.com/title/tt0111161/",
    },
    {
      id: 2,
      movie: "The Godfather",
      rating: 9.2,
      image: "images/godfather.jpg",
      imdb_url: "https://www.imdb.com/title/tt0068646/",
    },
  ];

  const contextValue = { movieList };

  return (
    <MovieContext.Provider value={contextValue}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
