import React from "react";
import ListBox from "./ListBox";
import WatchedBox from "./WatchedBox";
function Main({ movies, average, tempWatchedData, tempMovieData }) {
  return (
    <main className="main">
      <ListBox movies={movies} />
      <WatchedBox
        average={average}
        tempMovieData={tempMovieData}
        tempWatchedData={tempWatchedData}
      />
    </main>
  );
}

export default Main;
