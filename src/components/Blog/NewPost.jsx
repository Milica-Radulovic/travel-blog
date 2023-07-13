import { Link } from "react-router-dom";
import "./NewPostStyle.css";
import { Fade } from "react-awesome-reveal";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

const NewPost = ({ handleSubmit, formValues, inputChange }) => {
  return (
    <main className="wrapper">
      <Fade delay={1e2} cascade damping={1e-1} duration={3000}>
        <h2>Add New Post</h2>
      </Fade>
      <div className="inner">
        {/* Text Container with Logo and Social Media Links */}
        <section className="textContainer">
          <div className="logo">Logo</div>
          <p>
            Greetings, fellow wanderers and adventure seekers! We invite you to
            become a part of our vibrant travel community, where we come
            together to celebrate the joy of exploration and share our
            incredible experiences from around the globe. Your unique travel
            tales have the power to inspire, enlighten, and connect with fellow
            travelers, so let your voice be heard and join us in creating a
            tapestry of captivating adventures!
          </p>
          <p>
            There's something truly magical about reliving our journeys through
            storytelling. By sharing your adventures, you not only etch your
            memories into the annals of travel, but you also empower others to
            embark on their own extraordinary quests. Whether you've hiked
            through dense rainforests, dived into vibrant coral reefs, or
            immersed yourself in ancient cultures, your stories have the ability
            to ignite wanderlust and forge lasting connections with kindred
            spirits.
          </p>
          <p>
            Unleash Your Creativity!!! By sharing your adventures within our
            vibrant community, you have the power to inspire, uplift, and ignite
            a sense of wanderlust in the hearts of others. So, let your voice be
            heard, your photographs be seen, and your stories be told. Join us
            in this collective journey of discovery, where together we can
            inspire the world and create a treasure trove of memories that will
            be cherished for a lifetime. Share your adventures and let us embark
            on this incredible voyage together!
          </p>
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
          <form className="newPostForm" onSubmit={handleSubmit}>
            <label htmlFor="postImage">Image Url:</label>
            <input
              id="postImage"
              type="text"
              name="image"
              required
              value={formValues.image}
              onChange={inputChange}
            />

            <label htmlFor="postTitle">Title:</label>
            <input
              id="postTitle"
              type="text"
              name="title"
              required
              value={formValues.title}
              onChange={inputChange}
            />

            <label htmlFor="postAuthor">Author:</label>
            <input
              id="postAuthor"
              type="text"
              name="author"
              required
              value={formValues.author}
              onChange={inputChange}
            />

            <label htmlFor="postDescription">Description:</label>
            <textarea
              rows="10"
              cols="50"
              id="postDescription"
              name="description"
              required
              value={formValues.description}
              onChange={inputChange}
            />

            <label htmlFor="postBody">Post:</label>
            <textarea
              rows="20"
              cols="50"
              id="postBody"
              name="body"
              required
              value={formValues.body}
              onChange={inputChange}
            />

            <button className="submitButton" type="submit">
              Submit
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default NewPost;
