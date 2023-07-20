import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import logo from "../../images/logo.svg";
import "../Header/Header.css";
import Search from "./Search";
import BlogFeed from "./BlogFeed";
import close from "../../images/close1.svg";

const SearchLayer = ({ onClose, search, setSearch, articles }) => {
  console.log(articles);
  return (
    <div className="search-layer active">
      <button className="searchLayerClose" onClick={onClose}>
        <img src={close} style={{ width: "100px" }} />
      </button>
      <div className="searchLayerInner">
        <Fade delay={1e2} cascade damping={1e-1} duration={3000}>
          <div className="logo">
            <img src={logo} style={{ width: "200px" }} />
            <p className="logoText" style={{ color: "#36565C" }}>
              Write your own tale...
            </p>
          </div>
          <h2 style={{ color: "#36565C" }}>Search All Traveler's Tales</h2>
        </Fade>
        <div className="searchLayerWrapper">
          <Search search={search} setSearch={setSearch} />
        </div>
        <Fade delay={1e2} cascade damping={1e-1} duration={3000}>
          <div /* className="blogPageInner" */>
            <>
              {articles.length ? (
                <BlogFeed articles={articles} />
              ) : (
                <p>No Posts to display.</p>
              )}
            </>
          </div>
        </Fade>
        {/*  <Search search={search} setSearch={setSearch} /> */}
        {/* Replace the following line with your posts component */}
      </div>
    </div>
  );
};

export default SearchLayer;
