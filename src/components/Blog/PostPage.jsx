import { useParams, Link } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  return (
    <main>
      <article>
        {post && (
          <>
            <h2> {post.title} </h2>
            <p> {post.description}</p>
            <img />
            <p> {post.author}</p>
            <p> {post.datetime}</p>
            <p> {post.body}</p>

            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </>
        )}

        {!post && (
          <>
            <h2>Page Not Found</h2>
            <Link to="/">Visit Our Homepage</Link>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
