import { UserAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";
import RecentPost from "../Blog/SinglePost/RecentPost";

const UserPostsFeed = () => {
  const { user } = UserAuth();
  const { articles } = useData();

  return (
    <section className="recentPostsFeed">
      {articles
        .filter((article) => article.userId === user.uid)
        .map((article) => (
          <RecentPost key={article.id} article={article} />
        ))}
    </section>
  );
};

export default UserPostsFeed;
