import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "../../../firebase";
import { UserAuth } from "../../../context/AuthContext";
import { useData } from "../../../context/DataContext";
import { toast } from "react-toastify";
import { Editor } from "@tinymce/tinymce-react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import logo from "../../../images/logo.svg";
import "./NewPostStyle.css";

const EditPost = () => {
  const { user } = UserAuth();
  const { articles } = useData();
  const { id } = useParams();
  const article = articles.find((article) => article.id === id);

  const [editFormData, setEditFormData] = useState({
    title: "",
    country: "",
    datetime: Timestamp.now().toDate(),
    description: "",
    body: "",
    image: "",
  });
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  // handle Input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  // handle Image change
  const handleImageChange = (e) => {
    setEditFormData({ ...editFormData, image: e.target.files[0] });
  };

  // handle Edit
  const handleEdit = () => {
    if (
      !editFormData.title ||
      !editFormData.country ||
      !editFormData.description ||
      !editFormData.body ||
      !editFormData.image
    ) {
      alert("Please fill all the fields");
    }

    const storageRef = ref(
      storage,
      `/images/${Date.now()}${editFormData.image.name}`
    );

    const uploadImage = uploadBytesResumable(storageRef, editFormData.image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setEditFormData({
          title: "",
          country: "",
          description: "",
          body: "",
          image: "",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, "Articles");
          addDoc(articleRef, {
            title: editFormData.title,
            country: editFormData.country,
            description: editFormData.description,
            body: editFormData.body,
            imageUrl: url,
            datetime: Timestamp.now().toDate(),
            createdBy: user.displayName || user.email,
            userId: user.uid,
            likes: [],
            comments: [],
            isApproved: false,
          })
            .then(() => {
              toast("Post edited successfully.", { type: "success" });
              setProgress(0);
            })
            .catch((err) => {
              toast("Error editing post.", { type: "error" });
            });
          navigate("/blog");
        });
      }
    );
  };

  return (
    <main className="wrapper">
      <Fade delay={1e2} cascade damping={1e-1} duration={3000}>
        <h2>Edit Post</h2>
      </Fade>
      <div className="inner">
        {/* Text Container with Logo and Social Media Links */}
        <section className="textContainer">
          <div className="logo">
            <img src={logo} style={{ width: "200px" }} />
            <p className="logoText">Write your own tale...</p>
          </div>
          <p>
            Greetings, fellow wanderers and adventure seekers! We invite you to
            become a part of our vibrant travel community, where we come
            together to celebrate the joy of exploration and share our
            incredible experiences from around the globe. Your unique travel
            tales have the power to inspire, enlighten, and connect with fellow
            travelers, so let your voice be heard and join us in creating a
            tapestry of captivating adventures!
          </p>
          <p>
            There's something truly magical about reliving our journeys through
            storytelling. By sharing your adventures, you not only etch your
            memories into the annals of travel, but you also empower others to
            embark on their own extraordinary quests. Whether you've hiked
            through dense rainforests, dived into vibrant coral reefs, or
            immersed yourself in ancient cultures, your stories have the ability
            to ignite wanderlust and forge lasting connections with kindred
            spirits.
          </p>
          <p>
            Unleash Your Creativity!!! By sharing your adventures within our
            vibrant community, you have the power to inspire, uplift, and ignite
            a sense of wanderlust in the hearts of others. So, let your voice be
            heard, your photographs be seen, and your stories be told. Join us
            in this collective journey of discovery, where together we can
            inspire the world and create a treasure trove of memories that will
            be cherished for a lifetime. Share your adventures and let us embark
            on this incredible voyage together!
          </p>
          <div className="soialMediaLinksContainer">
            <span className="socialMediaLink">
              <Link className="link">
                <FaInstagram />
              </Link>
            </span>
            <span className="socialMediaLink">
              <Link className="link">
                <FaPinterestP />
              </Link>
            </span>
            <span className="socialMediaLink">
              <Link className="link">
                <FaFacebookF />
              </Link>
            </span>
            <span className="socialMediaLink">
              <Link className="link">
                <FaTwitter />
              </Link>
            </span>
          </div>
        </section>

        {/* Form Section */}
        <section className="formContainer">
          <div className="newPostForm">
            <label htmlFor="">
              <span className="required">Add Image *</span>
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              required
              onChange={(e) => handleImageChange(e)}
            />

            {progress === 0 ? null : (
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped mt-2"
                  style={{ width: `${progress}%` }}
                >
                  {`uploading image ${progress}%`}
                </div>
              </div>
            )}

            <label htmlFor="">
              <span className="required">Title *</span>
            </label>
            <input
              type="text"
              name="title"
              required
              value={editFormData.title}
              onChange={(e) => handleChange(e)}
            />

            <label htmlFor="">
              <span className="required">Country *</span>
            </label>
            <input
              type="text"
              name="country"
              required
              value={editFormData.country}
              onChange={(e) => handleChange(e)}
            />

            <label htmlFor="">
              <span className="required">Description *</span>
            </label>
            <textarea
              rows="10"
              cols="50"
              name="description"
              required
              value={editFormData.description}
              onChange={(e) => handleChange(e)}
            ></textarea>

            <label htmlFor="">
              <span className="required">Add Content *</span>
            </label>
            <Editor
              required
              textareaName="body"
              apiKey="4302b75eb45ce7c6212f47055d96a6f1b2f2b5af0095c92383e1cba784f571d4" // Replace with your TinyMCE API key
              initialValue="Write your own story..."
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | " +
                  "bold italic backcolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
              onEditorChange={(content) => {
                setEditFormData({ ...editFormData, body: content });
              }}
            />

            <button className="buttonOne" onClick={handleEdit}>
              Submit
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default EditPost;
