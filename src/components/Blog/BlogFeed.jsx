import BlogPost from "./BlogPost";
import "./BlogPageStyle.css";

const BlogFeed = ({ articles }) => {
  return (
    <section className="blogPageSection">
      {articles.map((article) => (
        <BlogPost key={article.id} article={article} />
      ))}
    </section>
  );
};

export default BlogFeed;
