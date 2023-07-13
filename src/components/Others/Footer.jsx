import { Link } from "react-router-dom";
import "./FooterStyle.css";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaAngleUp,
} from "react-icons/fa";

const Footer = () => {
  const today = new Date();
  return (
    <footer className="footer">
      <h3>Links</h3>

      {/* Links to Pages */}
      <div className="footerLinksToPages">
        <Link className="linkToPage" to="/">
          Home
        </Link>
        <Link className="linkToPage" to="/about">
          About Us
        </Link>
        <Link className="linkToPage" to="/blog">
          Blog
        </Link>
        <Link className="linkToPage" to="/contact">
          Contact
        </Link>
      </div>

      {/* Socal Media Links */}
      <div className="footerSoialMediaLinksContainer">
        <Link className="footerSocialMediaLink">
          <FaInstagram />
        </Link>
        <Link className="footerSocialMediaLink">
          <FaPinterestP />
        </Link>
        <Link className="footerSocialMediaLink">
          <FaFacebookF />
        </Link>
        <Link className="footerSocialMediaLink">
          <FaTwitter />
        </Link>
      </div>

      {/* Copyright */}
      <p className="footerPara">
        Copyright &copy; {today.getFullYear()} &nbsp;
        <span
          style={{
            fontFamily: "Bitter, serif",
            fontSize: "1.2rem",
            color: " #edeadc",
          }}
        >
          Traveler's Tales.
        </span>
        &nbsp; All rights reerved.
      </p>

      {/* Icon ArrowUp, To the Top of the page */}
      <div className="arrowUp">
        <a className="iconArrowUp" href="#">
          <FaAngleUp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
