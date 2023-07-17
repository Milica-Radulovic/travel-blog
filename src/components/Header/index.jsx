import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="navBar">
      <ul className="navBarList">
        <Logo />
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="aboutUs">About Us</Link>
        </li>
        <li>
          <Link to="blog">Blog</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
        <li>
          <Link to="/signin">SignIn</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
