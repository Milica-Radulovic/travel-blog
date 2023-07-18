import { useParams, Link } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db, storage } from "../../firebase";
import { toast } from "react-toastify";
import { deleteObject, ref } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import "./PostPageStyle.css";
import logo from "../../images/logo.svg";
import { FaAngleDoubleDown } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import RecentPostsFeed from "./RecentPostsFeed";

const PostPage = ({ articles }) => {
  const navigate = useNavigate();

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

  const { id } = useParams();
  const article = articles.find((article) => article.id.toString() === id);
  return (
    <main className="postPageWrappe">
      <span className="registrationLogo">
        <img className="logoColor" src={logo} style={{ width: "200px" }} />
        <p className="logoText">Write your own tale...</p>
      </span>
      <div className="postPageInner">
        <article className="postPageArticle">
          {article && (
            <>
              <Fade
                className="blogPageDMFade"
                delay={1e2}
                cascade
                damping={1e-1}
                duration={3000}
              >
                <h2 className="postPageTitle">{article.title}</h2>
              </Fade>
              <p className="postPageDescription">{article.description}</p>
              <img
                className="postPageImage"
                src={article.imageUrl}
                style={{ width: "100%", height: "700px", objectFit: "cover" }}
              />

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

              <div
                className="postPageBody"
                dangerouslySetInnerHTML={{ __html: article.body }}
              />
              <button className="submitButton" onClick={handleDelete}>
                Delete
              </button>
            </>
          )}

          {!article && (
            <>
              <h2>Page Not Found</h2>
              <Link to="/">Visit Our Homepage</Link>
            </>
          )}
        </article>
        <aside className="postPageAside">
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
          <RecentPostsFeed articles={articles} />
        </aside>
      </div>
    </main>
  );
};

export default PostPage;
