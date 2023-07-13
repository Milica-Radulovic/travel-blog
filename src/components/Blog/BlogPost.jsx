import { Link } from "react-router-dom";

const BlogPost = ({ post }) => {
  return (
    <article>
      <Link to={`/post/${post.id}`}>
        <img src={post.image} style={{ width: "400px" }} />
        <h2>{post.title}</h2>
        <p>
          {post.description.length <= 25
            ? post.description
            : `${post.description.slice(0, 25)}... `}
        </p>
      </Link>
    </article>
  );
};

export default BlogPost;
