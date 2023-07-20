import RecentPost from "./RecentPost";

const RecentPostsFeed = ({ articles }) => {
  return (
    <>
      <section className="recentPostsFeed">
        {articles.slice(0, 16).map((article) => (
          <RecentPost key={article.id} article={article} />
        ))}
      </section>
    </>
  );
};

export default RecentPostsFeed;
