import React, { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";

const Navbar = () => {
  const { setMovieList } = useContext(MovieContext);
  const [searchText, setSearchText] = useState("");

  const searchMoviesHandler = () => {
    if (searchText.trim() !== "") {
      // console.log(searchText);

      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=011730481d7f6f97f9268199745ab366&query=${searchText}`
      )
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setMovieList(data.results);
          // console.log(data.results);
        })
        .catch((error) => console.error(error));
    }
  };

  const homePageHandler = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=011730481d7f6f97f9268199745ab366"
    )
      .then((response) => response.json())
      .then((data) => setMovieList(data.results))
      .catch((error) => console.error(error));
  };

  return (
    <nav className="bg-cyan-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div
          onClick={homePageHandler}
          className="font-semibold text-blue-200 text-3xl font-sans"
        >
          🎦Screen Scoop
        </div>
        <div className="flex items-center">
          <input
            type="text"
            id="searchMoviesText"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)} // Update searchText state
            placeholder="Search movies..."
            className="px-4 py-2 rounded-l-md focus:outline-none font-semibold bg-blue-200"
          />
          <button
            onClick={searchMoviesHandler}
            className="bg-sky-600 text-gray-100 px-4 py-2 rounded-r-md font-semibold hover:bg-sky-800 focus:outline-none"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
