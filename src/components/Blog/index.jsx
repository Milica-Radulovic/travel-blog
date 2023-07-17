import { Link } from "react-router-dom";
import BlogFeed from "./BlogFeed";
import "./BlogPageStyle.css";
import { Fade } from "react-awesome-reveal";
import Search from "./Search";
import { UserAuth } from "../../context/AuthContext";

const Blog = ({ search, setSearch, articles }) => {
  const { user } = UserAuth();

  return (
    <main className="blogPageWrapper">
      <Fade delay={1e2} cascade damping={1e-1} duration={3000}>
        <h2>All Travels Tales</h2>
      </Fade>
      <div className="blogPageButtonAndSearch">
        {user && (
          <Link className="blogPageButtonLink" to="/article">
            Click here to write your own tale...
          </Link>
        )}

        <div>
          <Search search={search} setSearch={setSearch} />
        </div>
      </div>

      <div className="blogPageInner">
        <>
          {articles.length ? (
            <BlogFeed articles={articles} />
          ) : (
            <p>No Posts to display.</p>
          )}
        </>
      </div>
    </main>
  );
};

export default Blog;
