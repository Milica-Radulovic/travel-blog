import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FaUser } from "react-icons/fa";
import { UserAuth } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = UserAuth();
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
          <Link to="comunity">Comunity</Link>
        </li>
        {!user ? (
          <li>
            <Link to="/signin">
              <FaUser />
            </Link>
          </li>
        ) : (
          <li>
            <Link to="/account">Account</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
