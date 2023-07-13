import BlogFeed from "./BlogFeed";

const Blog = ({ posts }) => {
  return (
    <main>
      {posts.length ? <BlogFeed posts={posts} /> : <p>No Recipe to display</p>}
    </main>
  );
};

export default Blog;
