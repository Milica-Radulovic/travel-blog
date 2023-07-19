import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { toast } from "react-toastify";
import { deleteObject, ref } from "firebase/storage";
import { FaAngleDoubleDown } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import { UserAuth } from "../../context/AuthContext";
import RecentPostsFeed from "./RecentPostsFeed";
import LikeArticle from "./LikeArticle";
import logo from "../../images/logo.svg";
import "./PostPageStyle.css";

const PostPage = ({ articles }) => {
  const { user } = UserAuth();
  const navigate = useNavigate();
  const [likes, setLikes] = useState("");
  const { id } = useParams();
  const article = articles.find((article) => article.id.toString() === id);

  // handle Delete
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      try {
        await deleteDoc(doc(db, "Articles", id));
        toast("Article deleted successfully", { type: "success" });
        const storageRef = ref(storage, imageUrl);
        await deleteObject(storageRef);
      } catch (error) {
        toast("Error deleting article", { type: "error" });
        console.log(error);
      }
      navigate("/blog");
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
                style={{ width: "100%", height: "700px", objectFit: "cover" }}
              />

              {/* Post Author */}
              <p className="postPageAuthor">
                {" "}
                <span
                  style={{
                    fontFamily: "'Laila', sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  Author:{" "}
                </span>
                {article.author}
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
                </span>{" "}
                {article.datetime.toDate().toDateString()}
              </p>

              {/* Post Body */}
              <div
                className="postPageBody"
                dangerouslySetInnerHTML={{ __html: article.body }}
              />

              <div>{user && <LikeArticle id={id} likes={likes} />}</div>

              {/*        {user && user.uid === userId && (
                <button className="submitButton" onClick={handleDelete}>
                  Delete
                </button>
              )} */}
            </>
          )}

          {/* Message if there is no Post */}
          {!article && (
            <>
              <h2>Page Not Found</h2>
              <Link to="/">Visit Our Homepage</Link>
            </>
          )}
        </article>

        {/* Aside with latest Poss and Link to Blog Page */}
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
                of Traveler's Tales on our Blog Page
              </Link>
            </div>
          </div>

          {/* Recent Posts */}
          <RecentPostsFeed articles={articles} />
        </aside>
      </div>
    </main>
  );
};

export default PostPage;
