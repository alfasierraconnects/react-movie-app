import React from "react";
import Movie from "./components/Movie";
import MovieContextProvider from "./context/MovieContext";

const App = () => {
  return (
    <MovieContextProvider>
      <div>
        <Movie />
      </div>
    </MovieContextProvider>
  );
};

export default App;
