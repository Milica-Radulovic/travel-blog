import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { Fade } from "react-awesome-reveal";
import logo from "../../images/logo.svg";
import "./RegistrationStyle.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  // handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      toast("You have logged in successfully.", { type: "success" });
      navigate("/account");
    } catch (err) {
      setError(err.message);
      toast(err.message, { type: "error" });
    }
  };

  return (
    <main className="registartionWrapper">
      {/* Logo */}
      <span className="registrationLogo">
        <img className="logoColor" src={logo} style={{ width: "200px" }} />
        <p className="logoText">Write your own tale...</p>
      </span>
      <div className="registrationInner">
        {/* Text */}
        <div className="registrationText">
          <Fade delay={1e2} cascade damping={1e-1} duration={3000}>
            <h2 className="registrationH2">Sign in to your account</h2>
          </Fade>
          <p>
            Don't have an account yet?{" "}
            <Link className="registrationLink" to="/signup">
              Sign Up.
            </Link>
          </p>
        </div>

        {/* Form */}
        <form className="registrationForm" onSubmit={handleSubmit}>
          <label>
            <span className="required">Email Address *</span>
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>
            <span className="required">Password *</span>
          </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Button */}
          <button className="buttonOne">Sign In</button>
        </form>
      </div>
    </main>
  );
};

export default SignIn;
