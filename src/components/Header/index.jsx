import { useData } from "../../context/DataContext";
import Navbar from "./Navbar";
import "./HeaderStyle.css";

const Header = () => {
  const { articles, search, setSearch } = useData();

  return (
    <header className="header">
      <Navbar />
    </header>
  );
};

export default Header;
