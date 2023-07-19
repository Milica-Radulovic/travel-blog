import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";
import { FaUser } from "react-icons/fa";
import { UserAuth } from "../../context/AuthContext";
import SearchLayer from "../Blog/SearchLayer";
import "./Header.css";
const Navbar = ({ search, setSearch, articles }) => {
  const { user } = UserAuth();
  const [showSearchLayer, setShowSearchLayer] = useState(false);

  const handleSearchIconClick = () => {
    console.log("Search icon clicked");
    setShowSearchLayer(!showSearchLayer);
  };

  return (
    <nav className="navBar">
      <ul className="navBarList">
        <Logo />
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About Us</Link>
        </li>
        <li>
          <Link to="blog">Blog</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
        <li>
          <Link className="search-icon" onClick={handleSearchIconClick}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
          {showSearchLayer && (
            <SearchLayer
              onClose={handleSearchIconClick}
              search={search}
              setSearch={setSearch}
              articles={articles}
            />
          )}
        </li>
        {!user ? (
          <li>
            <Link to="/signin">
              <FaUser />
            </Link>
          </li>
        ) : (
          <li>
            <Link to="/account">
              {" "}
              <p>{user && user.email} </p>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
