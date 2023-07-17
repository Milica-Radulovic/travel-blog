import "./HomePageStyle.css";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { FaAngleDoubleDown } from "react-icons/fa";

import CarouselPage from "./Carousel";
import HomeFeed from "./HomeFeed";
const Home = ({ articles }) => {
  return (
    <>
      <CarouselPage />
      <main className="homePageWrapper">
        <div className="homePageInner">
          <div className="homePageAboutUs">
            <Fade delay={1e2} cascade damping={1e-1} duration={3000}>
              <h2>About Us</h2>
              <p>
                Welcome to{" "}
                <span style={{ fontSize: "1.6rem", fontWeight: "bold" }}>
                  Traveler's Tale
                </span>
                , a vibrant travel blog led by our dedicated team of members and
                administrators who are passionate about exploring the world and
                sharing their experiences with you.
              </p>
              <p>
                At Traveler's Tale, we believe that the best stories are those
                created by fellow adventurers like you. We invite travel
                enthusiasts from all walks of life to join our community and
                share their own captivating tales from around the world.
              </p>
              <p>
                Join us on this exciting journey and become a member of
                Traveler's Tale! Share your unforgettable moments, hidden gems,
                travel tips, and cultural encounters with our global community.
                Let your voice be heard as we create a collective tapestry of
                travel narratives.
              </p>
            </Fade>
            <Link className="homePageAboutUsButton" to="/about">
              Read more
            </Link>
          </div>
          <section className="homePageRecentPosts">
            <Fade delay={1e2} cascade damping={1e-1} duration={3000}>
              <h2>Recent Posts</h2>
            </Fade>

            {/*  <FontAwesomeIcon icon={light("angles-down")} beat /> */}

            {articles.length ? (
              <HomeFeed articles={articles} />
            ) : (
              <p>No Posts to display.</p>
            )}
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
