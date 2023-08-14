import { useData } from "../../../context/DataContext";
import BlogPost from "./BlogPost";
import "./BlogPageStyle.css";

const BlogFeed = () => {
  const { articles } = useData();

  return (
    <section className="blogPageSection">
      {articles.map((article) => (
        <BlogPost key={article.id} article={article} />
      ))}
    </section>
  );
};

export default BlogFeed;
