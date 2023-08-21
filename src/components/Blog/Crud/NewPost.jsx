import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "../../../firebase";
import { UserAuth } from "../../../context/AuthContext";
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

const NewPost = () => {
  const editorRef = useRef();
  const { user } = UserAuth();
  const [formData, setFormData] = useState({
    title: "",
    country: "",
    datetime: Timestamp.now().toDate(),
    description: "",
    body: "",
    image: "",
  });
  const [progress, setProgress] = useState(0);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // handle Input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle Image change
  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  //validate
  const validate = () => {
    let errors = {};
    if (!formData.title) {
      errors.title = "Title is Required.";
    }
    if (!formData.country) {
      errors.country = "Country name is Required.";
    }
    if (!formData.description) {
      errors.description = "Description is Required.";
    }
    if (!formData.body) {
      errors.body = "Content is Required.";
    }
    if (!formData.image) {
      errors.image = "Image is Required.";
    }
    return errors;
  };

  // handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    setErrors(errors); // Update the errors state to trigger error display

    if (Object.keys(errors).length) {
      return; // Don't proceed if there are errors
    }

    const storageRef = ref(
      storage,
      `/images/${Date.now()}${formData.image.name}`
    );

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

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
        setFormData({
          title: "",
          country: "",
          description: "",
          body: "",
          image: "",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, "Articles");
          addDoc(articleRef, {
            title: formData.title,
            country: formData.country,
            description: formData.description,
            body: formData.body,
            imageUrl: url,
            datetime: Timestamp.now().toDate(),
            createdBy: user.displayName || user.email,
            userId: user.uid,
            likes: [],
            comments: [],
            isApproved: false,
          })
            .then(() => {
              toast(
                "Thank you for submitting your post! It will be reviewed before publishing to ensure its quality. Please allow some time for the review process.",
                { type: "success" }
              );
              setProgress(0);
            })
            .catch((err) => {
              toast("Error adding post.", { type: "error" });
            });
          navigate("/blog");
        });
      }
    );
  };

  return (
    <main className="wrapper">
      <Fade delay={1e2} cascade damping={1e-1} duration={3000}>
        <h2>Add New Post</h2>
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
            {/* Add Image */}
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
            {errors.image && <p className="errorMessage">{errors.image}</p>}
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
            {/* Title */}
            <label htmlFor="">
              <span className="required">Title *</span>
            </label>
            <input
              type="text"
              name="title"
              required
              value={formData.title}
              onChange={(e) => handleChange(e)}
            />
            {errors.title && <p className="errorMessage">{errors.title}</p>}
            {/* Country */}
            <label htmlFor="">
              <span className="required">Country *</span>
            </label>
            <input
              type="text"
              name="country"
              required
              value={formData.country}
              onChange={(e) => handleChange(e)}
            />
            {errors.country && <p className="errorMessage">{errors.country}</p>}
            {/* Description */}
            <label htmlFor="">
              <span className="required">Description *</span>
            </label>
            <textarea
              rows="10"
              cols="50"
              name="description"
              required
              value={formData.description}
              onChange={(e) => handleChange(e)}
            ></textarea>
            {errors.description && (
              <p className="errorMessage">{errors.description}</p>
            )}
            {/* Add Content */}
            <label htmlFor="">
              <span className="required">Add Content *</span>
            </label>
            <Editor
              required
              textareaName="body"
              apiKey="8zmnb49ff0a02lg7r7s588xn97a633hlofsx0ubj9q76nbva" // Replace with your TinyMCE API key
              onInit={(evt, editor) => (editorRef.current = editor)}
              onEditorChange={(content) => {
                setFormData({ ...formData, body: content });
              }}
            />
            {errors.body && <p className="errorMessage">{errors.body}</p>}
            <button className="buttonOne" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default NewPost;
