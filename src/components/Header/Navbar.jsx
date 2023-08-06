import { Link } from "react-router-dom";
import { useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";
import { FaUser } from "react-icons/fa";
import SearchLayer from "./Search/SearchLayer";
import logo from "../../images/logoNav.svg";
import { Twirl as Hamburger } from "hamburger-react";
import "./HeaderStyle.css";

const Navbar = () => {
  const { search, setSearch, articles } = useData();
  const { user } = UserAuth();
  const [isOpen, setOpen] = useState(false);
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
          <div className="navbarHamburger">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color="#E1D4BC"
              size={90}
              duration={0.4}
            />
          </div>
        </div>

        <div className="navbarMain ">
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

        <div className="navbarRight ">
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
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User Avatar"
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              ) : (
                <FaUser />
              )}
            </Link>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="extendedNavbar">
          <Link className="extendedNavbarMainLink" to="/">
            <div className="extendedNavbarMainDiv">Home</div>
          </Link>
          <Link className="extendedNavbarMainLink" to="/about">
            <div className="extendedNavbarMainDiv">About Us</div>
          </Link>
          <Link className="extendedNavbarMainLink" to="/blog">
            <div className="extendedNavbarMainDiv">Blog</div>
          </Link>
          <Link className="extendedNavbarMainLink" to="/contact">
            <div className="extendedNavbarMainDiv">Contact</div>
          </Link>
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
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User Avatar"
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              ) : (
                <FaUser />
              )}
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
