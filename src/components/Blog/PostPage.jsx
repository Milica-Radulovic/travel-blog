import { useParams, Link } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db, storage } from "../../firebase";
import { toast } from "react-toastify";
import { deleteObject, ref } from "firebase/storage";
import { useNavigate } from "react-router-dom";

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
    <main>
      <article>
        {article && (
          <>
            <img src={article.imageUrl} style={{ width: "300px" }} />
            <h2>{article.title}</h2>
            <p>{article.author}</p>
            <p>{article.datetime.toDate().toDateString()}</p>
            <p>{article.description}</p>
            <div dangerouslySetInnerHTML={{ __html: article.body }} />
            <button onClick={handleDelete}>Delete</button>
          </>
        )}

        {!article && (
          <>
            <h2>Page Not Found</h2>
            <Link to="/">Visit Our Homepage</Link>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
