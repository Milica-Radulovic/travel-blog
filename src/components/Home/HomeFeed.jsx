import BlogPost from "../Blog/BlogPost";
const HomeFeed = ({ articles }) => {
  return (
    <section id="recentPosts" className="homePageSection">
      {articles.slice(0, 6).map((article) => (
        <BlogPost key={article.id} article={article} />
      ))}
    </section>
  );
};

export default HomeFeed;
