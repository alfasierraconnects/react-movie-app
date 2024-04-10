import React from "react";
import Movie from "./components/Movie";
import MovieContextProvider from "./context/MovieContext";

const App = () => {
  return (
    <MovieContextProvider>
      <div className="bg-gray-800 min-h-screen">
        <Movie />
      </div>
    </MovieContextProvider>
  );
};

export default App;
