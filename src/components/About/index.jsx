import { Link } from "react-router-dom";
import "./AboutPageStyle.css";
import logo from "../../images/logo.svg";
import { Fade } from "react-awesome-reveal";
import RecentPostsFeed from "../Blog/RecentPostsFeed";

const About = ({ articles }) => {
  return (
    <main className="aboutPageWrapper">
      <div className="aboutPageInner">
        <div className="logo">
          <img src={logo} style={{ width: "200px" }} />
          <p className="logoText">Write your own tale...</p>
        </div>
        <Fade delay={1e2} cascade damping={1e-1} duration={3000}>
          <h2 className="aboutPageH2">
            Welcome to Traveler's Tales, where wanderlust meets storytelling!
          </h2>
        </Fade>
        <p>
          We are not just a travel blog; we are a vibrant community of
          adventurous souls who are passionate about exploring the beauty of our
          planet. From seasoned globetrotters to aspiring explorers, our
          platform brings together travel enthusiasts from all walks of life to
          share their incredible journeys and experiences with the world.
        </p>
        <p>
          At Traveler's Tales, we believe that every trip is a unique story
          waiting to be told. Whether you've traversed the bustling streets of a
          vibrant city, hiked breathtaking mountain trails, immersed yourself in
          the tranquility of untouched beaches, or indulged in the diverse
          flavors of distant lands – your travel memories hold the power to
          inspire, connect, and educate.
        </p>
        <p>
          Our dedicated team of travel admins and members ensures that each tale
          is carefully crafted to encapsulate the essence of the destination and
          the essence of the traveler's soul. Through vivid imagery, heartfelt
          narratives, and valuable tips, we aim to ignite the wanderlust within
          you and spark a sense of curiosity for the unexplored corners of the
          world.
        </p>
        <p>
          But Traveler's Tales is more than just a platform for storytelling;
          it's a supportive community where friendships are forged and knowledge
          is shared. Connect with like-minded individuals who understand the
          thrill of traversing uncharted territories and exchanging valuable
          travel advice. Embrace cultural diversity, celebrate the joy of
          exploration, and foster a deep appreciation for the natural wonders
          that surround us.
        </p>
        <p>
          As we embark on this collective journey, we invite you to be part of
          our ever-growing family of passionate travelers. Share your tales,
          inspire others to embark on their adventures, and let your words
          create ripples that resonate across the globe.
        </p>
        <p>
          So, whether you're a seasoned nomad or an armchair traveler with
          dreams of setting foot on distant shores, Traveler's Tales welcomes
          you with open arms. Join us in celebrating the art of travel and the
          beauty of our planet – one captivating tale at a time.
        </p>
        <p>
          Adventure awaits, and the world is calling. Are you ready to answer
          its call? Let your stories unfurl as we embark on a journey of endless
          inspiration and wonder at Traveler's Tales.
        </p>
        <p>
          Adventure awaits, and the world is calling. Are you ready to answer
          its call? Let your stories unfurl as we embark on a journey of endless
          inspiration and wonder at Traveler's Tales.
        </p>
      </div>
      <div className="aboutPageGallery">
        <div className="aboutPagePosts">
          <Fade delay={1e2} cascade damping={1e-1} duration={3000}>
            <h2 className="aboutPageH2">Our Recent Travelers Tales</h2>
          </Fade>
          <Fade
            delay={1e2}
            cascade
            damping={1e-1}
            duration={3000}
            direction="down"
          >
            <RecentPostsFeed articles={articles} />
          </Fade>
          <Link className="aboutPageLinkTBP" to="/blog">
            <button className="submitButton"> See more</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default About;

