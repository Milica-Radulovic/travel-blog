import BlogPost from "./BlogPost";

const BlogFeed = ({ posts }) => {
  return (
    <section>
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </section>
  );
};

export default BlogFeed;
