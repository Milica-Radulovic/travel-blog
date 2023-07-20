import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import CarouselPage from "./Carousel";
import HomeFeed from "./HomeFeed";
import "./HomePageStyle.css";

const Home = ({ articles }) => {
  return (
    <>
      <CarouselPage />
      <main className="homePageWrapper">
        <div className="homePageInner">
          {/* Small Section About Us with Link to the About Page */}
          <div className="homePageAboutUsWrapper">
            {" "}
            <div className="homePageAboutUs">
              <Fade delay={1e2} cascade damping={1e-1} duration={3000}>
                <h2 className="homePageH2">About Us</h2>
                <p>
                  Welcome to{" "}
                  <span style={{ fontSize: "1.6rem", fontWeight: "bold" }}>
                    Traveler's Tales
                  </span>
                  , a vibrant travel blog led by our dedicated team of members
                  and administrators who are passionate about exploring the
                  world and sharing their experiences with you.
                </p>
                <p>
                  At Traveler's Tale, we believe that the best stories are those
                  created by fellow adventurers like you. We invite travel
                  enthusiasts from all walks of life to join our community and
                  share their own captivating tales from around the world.
                </p>
                <p>
                  Join us on this exciting journey and become a member of
                  Traveler's Tale! Share your unforgettable moments, hidden
                  gems, travel tips, and cultural encounters with our global
                  community. Let your voice be heard as we create a collective
                  tapestry of travel narratives.
                </p>
              </Fade>
              <Link className="homePageAboutUsButton" to="/about">
                Read more
              </Link>
            </div>
          </div>

          {/* Recent 6 Posts */}
          <section className="homePageRecentPosts">
            <Fade delay={1e2} cascade damping={1e-1} duration={3000}>
              <h2 className="homePageH2">Recent Traveler's Tales</h2>
            </Fade>

            {/*  <FontAwesomeIcon icon={light("angles-down")} beat /> */}

            {articles.length ? (
              <HomeFeed articles={articles} />
            ) : (
              <p>No Posts to display.</p>
            )}
          </section>

          {/* Top Travel Tips */}
          <section className="travelTips">
            {/* Title */}
            <Fade delay={1e2} cascade damping={1e-1} duration={3000}>
              <div
                className="travelTipsH2"
                style={{
                  width: "100%",
                  height: "20px",
                  borderBottom: "0.2px solid #B4C7BF",
                  textAlign: "center",
                }}
              >
                <span
                  className="travelTipsHeading"
                  style={{
                    fontSize: "40px",
                    padding: "0 10px",
                    backgroundColor: "#EDEADC",
                    color: "#36565C",
                  }}
                >
                  Top Travel Tips
                </span>
              </div>
            </Fade>
            <p className="travelTipsPara">
              Here is where you'll find some of our best travel tips for
              traveling with kids, saving money for travel, planning your trip,
              and unbelievable destinations.
            </p>
            <div className="travelTipsWrapper">
              {/* Travel Tips */}
              <Fade
                className="travelTipsLink"
                delay={1e2}
                cascade
                damping={1e-1}
                duration={3000}
              >
                <Link
                  to="/travelList"
                  style={{
                    color: "#36565C",
                    textDecoration: "none",
                    fontSize: "1.4rem",
                  }}
                >
                  <img
                    src="https://images.pexels.com/photos/3082619/pexels-photo-3082619.jpeg"
                    style={{
                      width: "100%",
                    }}
                  />
                  <p>
                    How to Plan a Road Trip with Kids (and keep your sanity)
                  </p>
                </Link>
              </Fade>

              {/* Travel Tips */}
              <Fade
                className="travelTipsLink"
                delay={1e2}
                cascade
                damping={1e-1}
                duration={3000}
              >
                <Link
                  to="/topTips"
                  style={{
                    color: "#36565C",
                    textDecoration: "none",
                    fontSize: "1.4rem",
                  }}
                >
                  <img
                    src="https://images.pexels.com/photos/1231365/pexels-photo-1231365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    style={{
                      width: "100%",
                    }}
                  />
                  <p>Our 20 Best Travel Tips After 20 Years of Traveling</p>
                </Link>
              </Fade>

              {/* Travel Tips */}
              <Fade
                className="travelTipsLink"
                delay={1e2}
                cascade
                damping={1e-1}
                duration={3000}
              >
                <Link
                  to="/planTrip"
                  style={{
                    color: "#36565C",
                    textDecoration: "none",
                    fontSize: "1.4rem",
                  }}
                >
                  <img
                    src="https://images.pexels.com/photos/1157399/pexels-photo-1157399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    style={{
                      width: "100%",
                    }}
                  />
                  <p>
                    15 Tips for Planning a Trip To Anywhere (step-by-step guide)
                  </p>
                </Link>
              </Fade>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
