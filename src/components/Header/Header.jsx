import Navbar from "./Navbar";
import "./Header.css";
const Header = ({ search, setSearch, articles }) => {
  return (
    <header className="header">
      <Navbar search={search} setSearch={setSearch} articles={articles} />
    </header>
  );
};

export default Header;
