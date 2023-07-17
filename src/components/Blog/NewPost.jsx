import { Link } from "react-router-dom";
import "./NewPostStyle.css";
import { Fade } from "react-awesome-reveal";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import React, { useState } from "react";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import { Editor } from "@tinymce/tinymce-react";

const NewPost = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
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
    setFormData({ ...formData, [name]: value });
  };

  // handle Image change
  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  // handle Submit
  const handleSubmit = () => {
    if (
      !formData.title ||
      !formData.author ||
      !formData.description ||
      !formData.body ||
      !formData.image
    ) {
      alert("Please fill all the fields");
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
          author: "",
          description: "",
          body: "",
          image: "",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, "Articles");
          addDoc(articleRef, {
            title: formData.title,
            author: formData.author,
            description: formData.description,
            body: formData.body,
            imageUrl: url,
            datetime: Timestamp.now().toDate(),
          })
            .then(() => {
              toast("Post added successfully", { type: "success" });
              setProgress(0);
            })
            .catch((err) => {
              toast("Error adding post", { type: "error" });
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
            <label htmlFor="">Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
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

            <label htmlFor="">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={(e) => handleChange(e)}
            />

            <label htmlFor="">Author</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={(e) => handleChange(e)}
            />

            <label htmlFor="">Description</label>
            <textarea
              rows="10"
              cols="50"
              name="description"
              value={formData.description}
              onChange={(e) => handleChange(e)}
            ></textarea>

            <label htmlFor="">Body</label>
            <Editor
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
                setFormData({ ...formData, body: content });
              }}
            />
            {/*             <textarea
              rows="20"
              cols="50"
              name="body"
              value={formData.body}
              onChange={(e) => handleChange(e)}
            ></textarea> */}

            <button className="submitButton" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default NewPost;
