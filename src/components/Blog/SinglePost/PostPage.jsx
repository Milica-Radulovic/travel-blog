import { useParams, Link, useNavigate } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { db, storage } from "../../../firebase";
import { UserAuth } from "../../../context/AuthContext";
import { useData } from "../../../context/DataContext";
import { toast } from "react-toastify";
import { FaAngleDoubleDown } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import RecentPostsFeed from "./RecentPostsFeed";
import LikePost from "../Crud/LikePost";
import Comment from "../Crud/Comment";
import logo from "../../../images/logo.svg";
import "./PostPageStyle.css";

const PostPage = () => {
  const { articles, isLoading, deleteArticle } = useData();
  const { user } = UserAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const article = articles.find((article) => article.id === id);

  if (isLoading) {
    // Render a loading indicator while data is being fetched
    return (
      <p className="statusIsLoading">
        <i className="fas fa-spinner fa-pulse"></i>
      </p>
    );
  }

  if (!article) {
    // Render an appropriate message when the article is not found
    return <div>Article not found.</div>;
  }

  // handle Delete
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      try {
        await deleteDoc(doc(db, "Articles", id));
        const storageRef = ref(storage, article.imageUrl);
        await deleteObject(storageRef);

        // Call the deleteArticle function to update the state
        deleteArticle(id);

        toast("Post deleted successfully.", { type: "success" });
        navigate("/blog");
      } catch (error) {
        toast("Error deleting post.", { type: "error" });
        console.log(error);
      }
    }
  };

  return (
    <main className="postPageWrappe">
      {/* Logo */}
      <span className="registrationLogo">
        <img className="logoColor" src={logo} style={{ width: "200px" }} />
        <p className="logoText">Write your own tale...</p>
      </span>

      <div className="postPageInner">
        {/* Post */}
        <article className="postPageArticle">
          {article && (
            <>
              {/* Post Title */}
              <Fade
                className="blogPageDMFade"
                delay={1e2}
                cascade
                damping={1e-1}
                duration={3000}
              >
                <h2 className="postPageTitle">{article.title}</h2>
              </Fade>

              {/* Post Description */}
              <p className="postPageDescription">{article.description}</p>

              {/* Post Image */}
              <img
                className="postPageImage"
                src={article.imageUrl}
                style={{ width: "100%", objectFit: "cover" }}
              />

              {/* Created By */}
              <p
                style={{
                  textDecoration: "underline",
                }}
              >
                {article.createdBy && (
                  <span
                    style={{
                      fontFamily: "'Laila', sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    Created By:{" "}
                  </span>
                )}
                {article.createdBy}
              </p>

              {/* Post Country */}
              <p className="blogPageAuthor">
                <span
                  style={{
                    fontFamily: "'Laila', sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  Country:{" "}
                </span>
                {article.country}
              </p>

              {/* Post Date */}
              <p className="postPageDate">
                <span
                  style={{
                    fontFamily: "'Laila', sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  Date:{" "}
                </span>
                {article.datetime.toDate().toDateString()}
              </p>

              {/* Post Body */}
              <div
                className="postPageBody"
                dangerouslySetInnerHTML={{ __html: article.body }}
              />

              {/* Likes */}
              {user && <LikePost article={article} />}
              <div>
                <p>
                  {article.likes?.length === 1
                    ? `${article.likes.length} like`
                    : `${article.likes?.length} likes`}
                </p>
              </div>
            </>
          )}

          {/* Comments */}
          <Comment article={article} />
          {/* Render the Comment component and pass the article as a prop */}
          {article.comments && article.comments.length > 0 && (
            <div>
              <p>
                {article.comments.length === 1
                  ? `${article.comments.length} comment`
                  : `${article.comments.length} comments`}
              </p>
            </div>
          )}

          {/* Delete Button */}
          {user && user.uid === article.userId && (
            <button className="buttonOne postPageButton" onClick={handleDelete}>
              Delete
            </button>
          )}

          {/* Message if there is no Post */}
          {!article && (
            <>
              <h2>Page Not Found</h2>
              <Link to="/">Visit Our Homepage</Link>
            </>
          )}
        </article>

        {/* Aside with latest Posts and Link to Blog Page */}
        <aside className="postPageAside">
          {/* Link to Blog Page */}
          <div className="postPageLinkToBlog">
            <div className="postPageLinkToBlogInner">
              <Link className="linkToBlogPage" to="/blog">
                Search <br />
                <span
                  style={{
                    fontSize: "2.4rem",
                    fontFamily: "'Laila', sans-serif",
                  }}
                >
                  100' s
                </span>
                <br />
                <Fade
                  delay={1e2}
                  cascade
                  damping={1e-1}
                  duration={2000}
                  direction="down"
                >
                  <FaAngleDoubleDown style={{ fontSize: "2rem" }} />
                </Fade>
                <br />
                of{" "}
                <span
                  style={{
                    fontFamily: "'Laila', sans-serif",
                  }}
                >
                  Traveler's Tales
                </span>{" "}
                on our Blog Page
              </Link>
            </div>
          </div>

          {/* Recent Posts */}
          <RecentPostsFeed />
        </aside>
      </div>
    </main>
  );
};

export default PostPage;
