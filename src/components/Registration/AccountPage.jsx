import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { Fade } from "react-awesome-reveal";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const AccountPage = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  // handle Logout
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/signin");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <main className="registartionWrapper">
      <span className="registrationLogo">
        <img src={logo} style={{ width: "200px" }} />
        <p className="logoText">Write your own tale...</p>
      </span>
      <div className="registrationInner">
        <div className="registrationText">
          <Fade delay={1e2} cascade damping={1e-1} duration={3000}>
            <h2>Your Account</h2>
          </Fade>
          <p>User Email: {user && user.email} </p>
          <Link to="/profile">Create your Profile</Link>
          {/* 
          <form className="registrationForm">
            <label>Your Name</label>
            <input type="text" />

            <label>Your Image</label>
            <input type="file" />

            <button className="secondButton">Update Profile</button>
          </form> */}

          <button className="submitButton" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </div>
    </main>
  );
};

export default AccountPage;
