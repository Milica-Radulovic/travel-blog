import { Link } from "react-router-dom";

const RandomPost = ({ article }) => {
  return (
    <article className="recentPost">
      <Link to={`/article/${article.id}`}>
        <img
          className="recentPostImage"
          src={article.imageUrl}
          alt="Recipe Image"
          style={{ width: "100%" }}
        />
      </Link>
    </article>
  );
};

export default RandomPost;
