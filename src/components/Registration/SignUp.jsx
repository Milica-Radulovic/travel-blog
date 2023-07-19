import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { Fade } from "react-awesome-reveal";
import logo from "../../images/logo.svg";
import { toast } from "react-toastify";

/* import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
 */
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/account");
    } catch (error) {
      setError(e.message);
      console.log(e.message);
      toast(error.code, { type: "error" });
    }
  };

  /*  const handleSubmit = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser, { displayName: name });
      navigate("/");
    } catch (error) {
      toast(error.code, { type: "error" });
    }
  }; */

  return (
    <main className="registartionWrapper">
      <span className="registrationLogo">
        <img src={logo} style={{ width: "200px" }} />
        <p className="logoText">Write your own tale...</p>
      </span>
      <div className="registrationInner">
        <div className="registrationText">
          <Fade delay={1e2} cascade damping={1e-1} duration={3000}>
            <h2>Sign up for a free account</h2>
          </Fade>
          <p>
            Already have an account yet?{" "}
            <Link className="registrationLink" to="/signin">
              Sign In.
            </Link>
          </p>
        </div>
        <form className="registrationForm" onSubmit={handleSubmit}>
          {/*        <label>Name</label>
          <input type="text" onChange={(e) => setName(e.target.value)} /> */}

          <label>Email Address</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />

          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="submitButton">Sign Up</button>
        </form>
      </div>
    </main>
  );
};

export default SignUp;
