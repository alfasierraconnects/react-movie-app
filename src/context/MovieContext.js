import { createContext, useState } from "react";

export const MovieContext = createContext(null);

const MovieContextProvider = (props) => {
  const [movieList, setMovieList] = useState([]);

  const contextValue = { movieList, setMovieList };

  return (
    <MovieContext.Provider value={contextValue}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
