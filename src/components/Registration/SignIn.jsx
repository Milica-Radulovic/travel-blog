import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { Fade } from "react-awesome-reveal";
import "./RegistrationStyle.css";
import logo from "../../images/logo.svg";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <main className="registartionWrapper">
      <span className="registrationLogo">
        <img className="logoColor" src={logo} style={{ width: "200px" }} />
        <p className="logoText">Write your own tale...</p>
      </span>
      <div className="registrationInner">
        <div className="registrationText">
          <Fade delay={1e2} cascade damping={1e-1} duration={3000}>
            <h2>Sign in to your account</h2>
          </Fade>
          <p>
            Don't have an account yet?{" "}
            <Link className="registrationLink" to="/signup">
              Sign Up.
            </Link>
          </p>
        </div>
        <form className="registrationForm" onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />

          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="submitButton">Sign In</button>
        </form>
      </div>
    </main>
  );
};

export default SignIn;
