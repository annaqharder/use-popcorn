import Logo from "./Logo";
import SearchBar from "./SearchBar";

function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <SearchBar />
      {children}
    </nav>
  );
}

export default NavBar;
