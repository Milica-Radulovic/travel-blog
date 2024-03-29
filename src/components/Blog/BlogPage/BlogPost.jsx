import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import "./BlogPageStyle.css";

const BlogPost = ({ article }) => {
  return (
    /* Blog Article */
    <article className="blogPageArticle">
      <Link className="blogPostLink" to={`/article/${article.id}`}>
        {/* Post Image */}
        <img
          className="blogPageImage"
          src={article.imageUrl}
          alt={article.title}
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
          }}
        />

        {/* Post Text Card*/}
        <div className="blogPageArticleText">
          {/* Post Title */}
          <h2 className="blogPageTitle">{article.title}</h2>

          {/* Post Author */}
          <p>
            {article.createdBy && (
              <span
                style={{
                  fontFamily: "'Laila', sans-serif",
                  fontWeight: "bold",
                }}
              >
                Created By:{" "}
              </span>
            )}
            {article.createdBy}
          </p>

          {/* Post Date */}
          <p>
            <span
              style={{
                fontFamily: "'Laila', sans-serif",
                fontWeight: "bold",
              }}
            >
              Date:{" "}
            </span>
            {article.datetime.toDate().toDateString()}
          </p>

          {/* Post Description */}
          <p>
            <span
              style={{
                fontFamily: "'Laila', sans-serif",
                fontWeight: "bold",
              }}
            >
              Description:{" "}
            </span>
            {article.description.length <= 150
              ? article.description
              : `${article.description.slice(0, 150)}...`}
          </p>

          {/* See more */}
          <div className="blogPageIconContainer">
            <Fade
              className="blogPageDMFade"
              delay={1e2}
              cascade
              damping={1e-1}
              duration={3000}
            >
              <p style={{ textTransform: "uppercase" }}>Discover more</p>
              <FaAngleDoubleRight style={{ fontSize: "1.4rem" }} />
            </Fade>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogPost;
