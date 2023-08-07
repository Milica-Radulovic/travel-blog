import { UserAuth } from "../../../context/AuthContext";
import { useData } from "../../../context/DataContext";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";

export default function LikeArticle({ article }) {
  const { articles } = useData();
  const { user } = UserAuth();
  console.log(user.uid);

  const likesRef = doc(db, "Articles", article.id);

  const handleLike = () => {
    if (article.likes?.includes(user.uid)) {
      updateDoc(likesRef, {
        likes: arrayRemove(user.uid),
      })
        .then(() => {
          console.log("unliked");
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      updateDoc(likesRef, {
        likes: arrayUnion(user.uid),
      })
        .then(() => {
          console.log("liked");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <div>
      <i
        className={`fa fa-heart${
          !article.likes?.includes(user.uid) ? "-o" : ""
        } fa-lg`}
        style={{
          cursor: "pointer",
          color: article.likes?.includes(user.uid) ? "red" : null,
        }}
        onClick={handleLike}
      />
    </div>
  );
}
