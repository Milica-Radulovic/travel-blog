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

  const closeNavbar = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className="navContainer"
        style={{
          /*    paddingBottom: "100px", */
          height: "132px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <nav className="navbarContainer">
          <div className="navbarInner">
            <div className="navbarLeft">
              <Link to="/">
                <img src={logo} className="navbarLogo" />
              </Link>

              <div className="navbarHamburger">
                <Hamburger
                  className="hamburger"
                  toggled={isOpen}
                  toggle={setOpen}
                  color="#E1D4BC"
                  size={80}
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
                  <div className="animation">
                    <i className="fa-solid fa-user"></i>
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
            <div
              className={`${isOpen ? "extendedNavbar open" : "extendedNavbar"}`}
            >
              <Link
                className="extendedNavbarMainLink"
                to="/"
                onClick={closeNavbar}
              >
                <div className="extendedNavbarMainDiv">Home</div>
              </Link>
              <Link
                className="extendedNavbarMainLink"
                to="/about"
                onClick={closeNavbar}
              >
                <div className="extendedNavbarMainDiv">About Us</div>
              </Link>
              <Link
                className="extendedNavbarMainLink"
                to="/blog"
                onClick={closeNavbar}
              >
                <div className="extendedNavbarMainDiv">Blog</div>
              </Link>
              <Link
                className="extendedNavbarMainLink"
                to="/contact"
                onClick={closeNavbar}
              >
                <div className="extendedNavbarMainDiv">Contact</div>
              </Link>
              <Link className="navIcon " onClick={handleSearchIconClick}>
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
                <Link className="navIcon " to="/signin" onClick={closeNavbar}>
                  <div>
                    <i className="fa-solid fa-user"></i>
                  </div>
                </Link>
              ) : (
                <Link className="navIcon" to="/account" onClick={closeNavbar}>
                  {user.photoURL ? (
                    <img
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                      src={user.photoURL}
                      alt="User Avatar"
                    />
                  ) : (
                    <i className="fa-solid fa-user"></i>
                  )}
                </Link>
              )}
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
