import { Link } from "react-router-dom";

const RandomPost = ({ article }) => {
  return (
    <article className="recentPost">
      <Link
        to={`/article/${article.id}`}
        title={`Read More About ${article.title}`}
        aria-label={`Read More About ${article.title}`}
      >
        <div className="imageContainer">
          <img
            className="recentPostImage"
            src={article.imageUrl}
            alt={article.title}
            style={{ width: "100%" }}
          />
          <div className="imageOverlay">
            <div className="imageText">{article.country}</div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default RandomPost;
