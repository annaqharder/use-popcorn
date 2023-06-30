import Logo from "./Logo";
import SearchBar from "./SearchBar";

function NavBar({ children, query, setQuery }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <SearchBar query={query} setQuery={setQuery} />
      {children}
    </nav>
  );
}

export default NavBar;
