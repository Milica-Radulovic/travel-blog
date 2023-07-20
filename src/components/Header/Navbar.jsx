import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";
import { FaUser } from "react-icons/fa";
import { UserAuth } from "../../context/AuthContext";
import SearchLayer from "../Blog/SearchLayer";
import logo from "../../images/logoNav.svg";
import "./Header.css";
const Navbar = ({ search, setSearch, articles }) => {
  const { user } = UserAuth();
  const [showSearchLayer, setShowSearchLayer] = useState(false);

  const handleSearchIconClick = () => {
    console.log("Search icon clicked");
    setShowSearchLayer(!showSearchLayer);
  };

  return (
    <nav className="navbarContaner">
      <div className="navbarInner">
        <div className="navbarLeft">
          <Link to="/">
            <img src={logo} style={{ width: "140px" }} />
          </Link>
        </div>
        <div className="navbarMain">
          {" "}
          <Link className="navbarMainLink" to="/">
            <div className="navbarMainDiv">Home</div>
          </Link>
          <Link className="navbarMainLink" to="/about">
            <div className="navbarMainDiv">About Us</div>
          </Link>
          <Link className="navbarMainLink" to="/blog">
            <div className="navbarMainDiv">Blog</div>
          </Link>
          <Link className="navbarMainLink" to="/contact">
            <div className="navbarMainDiv">Contact</div>
          </Link>
        </div>
        <div className="navbarRight">
          <Link className="navIcon" onClick={handleSearchIconClick}>
            <div>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </Link>
          {showSearchLayer && (
            <SearchLayer
              onClose={handleSearchIconClick}
              search={search}
              setSearch={setSearch}
              articles={articles}
            />
          )}
          {!user ? (
            <Link className="navIcon" to="/signin">
              <div>
                <FaUser />
              </div>
            </Link>
          ) : (
            <Link className="navIcon" to="/account">
              <p>{user && user.email} </p>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
