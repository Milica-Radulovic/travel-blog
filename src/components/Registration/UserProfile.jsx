import React, { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Import Firebase storage functions

import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import logo from "../../images/logo.svg";
import { Fade } from "react-awesome-reveal";

function UserProfile() {
  const navigate = useNavigate();
  const { user, updateProfile } = UserAuth();
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      console.log("Please select a file.");
      return;
    }

    // Send image name to firebase
    const storage = getStorage();
    const storageRef = ref(storage, file.name);
    await uploadBytes(storageRef, file);

    // get image from firebase
    const downloadUrl = await getDownloadURL(storageRef);

    // Update user profile in the context
    updateProfile({
      photoURL: downloadUrl,
      displayName: name,
    });

    // No need to call `updateProfile` from firebase/auth here, as it's already done in the context

    navigate("/");
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <main className="registartionWrapper">
      {/* Logo */}
      <span className="registrationLogo">
        <img src={logo} style={{ width: "200px" }} />
        <p className="logoText">Write your own tale...</p>
      </span>
      <div className="registrationInner">
        <Fade delay={1e2} cascade damping={1e-1} duration={3000}>
          <h2>Create Profile</h2>
        </Fade>
        <form className="registrationForm" onSubmit={onSubmit}>
          <label>Add Your Name:</label>
          <input
            type="text"
            placeholder="Add your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Add Your Photo:</label>
          <input type="file" multiple onChange={handleFileChange} />
          <button type="submit" className="buttonOne">
            Update Profile
          </button>
        </form>
      </div>
    </main>
  );
}

export default UserProfile;
