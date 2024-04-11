import React from "react";
import Movie from "./components/Movie";
import Navbar from "./components/Navbar";
import MovieContextProvider from "./context/MovieContext";

const App = () => {
  return (
    <MovieContextProvider>
      <div className="bg-gray-800 min-h-screen">
        <Navbar />
        <Movie />
      </div>
    </MovieContextProvider>
  );
};

export default App;
