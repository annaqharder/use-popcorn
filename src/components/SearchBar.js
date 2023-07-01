import React, { useEffect, useRef } from "react";
import { useKey } from "../hooks/useKey";

function SearchBar({ query, setQuery }) {
  // 1) create ref
  const inputElement = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === inputElement.current) return;

    inputElement.current.focus();
    setQuery("");
  });

  // 3) have to use useEffect for the ref --> transformed into useKey hook ^
  // useEffect(
  //   function () {
  //     function callback(e) {
  //       if (document.activeElement === inputElement.current) return;
  //       if (e.code === "Enter") {
  //         inputElement.current.focus();
  //         setQuery("");
  //       }
  //     }
  //     document.addEventListener("keydown", callback);
  //     return () => document.addEventListener("keydown", callback);
  //   },
  //   [setQuery]
  // );

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      // 2) select the element
      ref={inputElement}
    />
  );
}

export default SearchBar;
