import { useData } from "../../../context/DataContext";
import RecentPost from "./RecentPost";

const RecentPostsFeed = () => {
  const { articles } = useData();

  return (
    <>
      <section className="recentPostsFeed">
        {articles.slice(0, 12).map((article) => (
          <RecentPost key={article.id} article={article} />
        ))}
      </section>
    </>
  );
};

export default RecentPostsFeed;
