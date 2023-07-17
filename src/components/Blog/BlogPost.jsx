import { Link } from "react-router-dom";
import "./BlogPageStyle.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const BlogPost = ({ article }) => {
  return (
    <article className="blogPageArticle">
      <Link className="blogPostLink" to={`/article/${article.id}`}>
        <img
          className="blogPageImage"
          src={article.imageUrl}
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
          }}
        />
        <div className="blogPageArticleText">
          <h2 className="blogPageTitle">
            {article.title.length <= 40
              ? article.title
              : `${article.title.slice(0, 40)}...`}
          </h2>
          <p className="blogPageAuthor">
            <span
              style={{
                fontFamily: "'Laila', sans-serif",
                fontWeight: "bold",
              }}
            >
              Author:{" "}
            </span>
            {article.author}
          </p>
          <p>
            {" "}
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
          <div className="blogPageIconContainer">
            <Fade
              className="blogPageDMFade"
              delay={1e2}
              cascade
              damping={1e-1}
              duration={3000}
            >
              <p style={{ textTransform: "uppercase" }}>Discover more</p>{" "}
              <FaAngleDoubleRight style={{ fontSize: "1.4rem" }} />
            </Fade>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogPost;
