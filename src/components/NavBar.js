import Logo from "./Logo";
import NumResults from "./NumResults";
import SearchBar from "./SearchBar";

function NavBar({ movies }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <SearchBar />
      <NumResults movies={movies} />
    </nav>
  );
}

export default NavBar;
