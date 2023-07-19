import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import logo from "../../images/logo.svg";
import "./RegistrationStyle.css";

import { UserAuth } from "../../context/AuthContext";

const Profile = () => {
  const { user } = UserAuth();
  /* 
  const [photoURL, setPhotoURL] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
  );
  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }

  function handleClick() {
    upload(photo, user, setLoading);
  }

  useEffect(() => {
    if (user?.photoURL) {
      setPhotoURL(user.photoURL);
    }
  }, [user]); */

  return (
    <main className="wrapper">
      <Fade delay={1e2} cascade damping={1e-1} duration={3000}>
        <h2>Create your Profile</h2>
      </Fade>
      <div className="logo">
        <img src={logo} style={{ width: "200px" }} />
        <p className="logoText">Write your own tale...</p>
      </div>{" "}
      <div className="inner">
        {/* Form Section */}
        <section className="formContainer">
          <form className="newPostForm">
            <label htmlFor="name">Your Name:</label>
            <input id="name" type="text" name="name" />

            <label htmlFor="file">Your Image:</label>
            <input id="file" type="file" name="file" />

            <button className="submitButton">Upload</button>
            <img className="avatar" />
          </form>
        </section>
      </div>
    </main>
  );
};

export default Profile;
