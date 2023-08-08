import {
  arrayRemove,
  arrayUnion,
  doc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../../../context/AuthContext";
import { useData } from "../../../context/DataContext";
import { v4 as uuidv4 } from "uuid";
import { db } from "../../../firebase";
import { toast } from "react-toastify";

export default function Comment({ article }) {
  const { user } = UserAuth();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const commentRef = doc(db, "Articles", article.id);

  useEffect(() => {
    const unsubscribe = onSnapshot(commentRef, (snapshot) => {
      setComments(snapshot.data()?.comments || []); // Use optional chaining and provide a default empty array
    });

    return () => unsubscribe();
  }, [article.id]);

  const handleChangeComment = (e) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = () => {
    if (comment.trim() === "") {
      return;
    }

    updateDoc(commentRef, {
      comments: arrayUnion({
        user: user.uid,
        userName: user.displayName,
        photoURL: user.photoURL,
        comment: comment,
        createdAt: new Date(),
        commentId: uuidv4(),
      }),
    })
      .then(() => {
        toast("Comment added successfully.", { type: "success" });
        setComment("");
      })
      .catch((err) => {
        toast("Error adding comment.", { type: "error" });
      });
  };

  // handle Delete Comment
  const handleDeleteComment = async (commentId) => {
    try {
      await updateDoc(commentRef, {
        comments: arrayRemove(comments.find((c) => c.commentId === commentId)),
      });
      toast("Comment deleted successfully.", { type: "success" });
    } catch (err) {
      toast("Error deleting comment.", { type: "error" });
    }
  };

  useEffect(() => {
    // Add a check to ensure article and comments are available
    if (article && article.comments) {
      setComments(article.comments);
    }
  }, [article]);

  if (!article || !article.comments) {
    // If 'article' or 'article.comments' is undefined or null, display a loading state or an appropriate message
    return <div>No comments available.</div>;
  }

  return (
    <div>
      <div className="comments">
        {comments.map(
          ({
            commentId,
            user: commentUser,
            comment,
            photoURL,
            createdAt,
            userName,
            user: email,
          }) => (
            <div key={commentId} className="comment">
              <div>
                <span>
                  {photoURL ? (
                    <img
                      src={photoURL}
                      alt="User"
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                  ) : (
                    <div>{userName || "USER:"}</div>
                  )}
                  {/* Display user photo or displayName if available */}
                </span>
                {comment}
              </div>
              <div>
                <small>Added on: {createdAt.toDate().toLocaleString()}</small>
              </div>
              {user && user.uid === article.userId && (
                <div className="commentDelete">
                  <i
                    className="fa fa-times"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDeleteComment(commentId)}
                  ></i>
                </div>
              )}
            </div>
          )
        )}
      </div>
      {user && (
        <>
          <textarea
            rows="10"
            cols="50"
            className="commentInput"
            value={comment}
            onChange={handleChangeComment}
            placeholder="Add a comment"
          ></textarea>{" "}
          <br />
          <button className="buttonOne" onClick={handleSubmitComment}>
            Post Comment
          </button>
        </>
      )}
    </div>
  );
}
