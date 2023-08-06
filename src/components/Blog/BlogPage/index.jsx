import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { UserAuth } from "../../../context/AuthContext";
import { useData } from "../../../context/DataContext";
import BlogFeed from "./BlogFeed";
import Search from "../../Header/Search/index";
import "./BlogPageStyle.css";

const Blog = () => {
  const { search, setSearch, articles, isLoading, error } = useData();
  const { user } = UserAuth();

  return (
    <main className="blogPageWrapper">
      {/* Blog Title */}
      <Fade delay={1e2} cascade damping={1e-1} duration={3000}>
        <h2 className="blogPageH2">All Traveler's Tales</h2>
      </Fade>

      <div className="blogPageButtonAndSearch">
        {/* Link to Create New Post if you are a User */}
        {user && (
          <Link className="blogPageButtonLink" to="/article">
            Click here to write your own tale...
          </Link>
        )}

        {/* Search Bar */}
        <div className="blogPageSearch">
          <Search search={search} setSearch={setSearch} />
        </div>
      </div>

      {/* All Posts */}
      <div className="blogPageInner">
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
      </div>
    </main>
  );
};

export default Blog;
