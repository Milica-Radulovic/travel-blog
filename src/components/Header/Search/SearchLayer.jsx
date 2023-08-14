import { useData } from "../../../context/DataContext";
import { Fade } from "react-awesome-reveal";
import logo from "../../../images/logo.svg";
import "../HeaderStyle.css";
import Search from "./index";
import BlogFeed from "../../Blog/BlogPage/BlogFeed";
import close from "../../../images/close1.svg";

const SearchLayer = ({ onClose }) => {
  const { articles, isLoading, error } = useData();

  console.log(articles);
  return (
    <div className="searchLayer active">
      <div className="searchLayerInner">
        <button className="searchLayerClose" onClick={onClose}>
          <img src={close} className="closeButton" />
        </button>
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
          <Search />
        </div>
        <Fade delay={1e2} cascade damping={1e-1} duration={3000}>
          <div /* className="blogPageInner" */>
            <>
              <>
                {" "}
                {isLoading && (
                  <p className="statusIsLoading">
                    {" "}
                    <i className="fas fa-spinner fa-pulse"></i>
                  </p>
                )}
                {!isLoading && error && (
                  <p className="statusMsg" style={{ color: "red" }}>
                    {error}
                  </p>
                )}
                {!isLoading &&
                  !error &&
                  (articles.length ? (
                    <BlogFeed articles={articles} />
                  ) : (
                    <p className="statusMsg">No Posts to display.</p>
                  ))}
              </>
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
