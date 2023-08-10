import { UserAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";
import RecentPost from "../Blog/SinglePost/RecentPost";
import { Fade } from "react-awesome-reveal";

const UserPostsFeed = () => {
  const { user, logout } = UserAuth();
  const { articles, isLoading, deleteArticle } = useData();

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
