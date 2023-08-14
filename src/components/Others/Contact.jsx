import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import logo from "../../images/logo.svg";
import "../Blog/Crud/NewPostStyle.css";

const Contact = () => {
  return (
    <main className="wrapper">
      <Fade
        className="contact"
        delay={1e2}
        cascade
        damping={1e-1}
        duration={3000}
      >
        <h2>Contact Us</h2>
      </Fade>
      <div className="inner">
        {/* Text Section with Logo and Social Media Links */}
        <section className="textContainer">
          <div className="logo">
            <img src={logo} style={{ width: "200px" }} />
            <p className="logoText">Write your own tale...</p>
          </div>
          <p>
            We believe that the best travel experiences are built on a
            foundation of knowledge and support. If you have any questions or
            need advice regarding your upcoming adventures, feel free to reach
            out to us.
          </p>
          <p>
            Connect with us through our website or social media channels, and
            let's start a conversation.
          </p>

          {/* Social Media Link */}
          <div className="soialMediaLinksContainer">
            <span className="socialMediaLink">
              <Link className="link">
                <FaInstagram />
              </Link>
            </span>
            <span className="socialMediaLink">
              <Link className="link">
                <FaPinterestP />
              </Link>
            </span>
            <span className="socialMediaLink">
              <Link className="link">
                <FaFacebookF />
              </Link>
            </span>
            <span className="socialMediaLink">
              <Link className="link">
                <FaTwitter />
              </Link>
            </span>
          </div>
        </section>

        {/* Form Section */}
        <section className="formContainer">
          <form
            action="https://formspree.io/f/xayzqljl"
            method="POST"
            className="newPostForm"
          >
            <label htmlFor="fName">
              <span className="required">First Name *</span>
            </label>
            <input id="fName" type="text" name="fName" required />

            <label htmlFor="lName">
              <span className="required">Last Name *</span>
            </label>
            <input id="lName" type="text" name="lName" required />

            <label htmlFor="email">
              <span className="required">Email Address *</span>
            </label>
            <input id="email" type="email" name="email" required />

            <label htmlFor="message">
              <span className="required">Your Message *</span>
            </label>
            <textarea
              rows="14"
              cols="50"
              id="message"
              name="message"
              required
            />

            <button className="buttonOne" type="submit">
              Submit
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Contact;
