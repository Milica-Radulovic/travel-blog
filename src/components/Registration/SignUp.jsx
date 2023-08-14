import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { Fade } from "react-awesome-reveal";
import logo from "../../images/logo.svg";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Add showPassword state
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  // handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      toast("Congratulations! You have signed up successfully.", {
        type: "success",
      });
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
        <img src={logo} style={{ width: "200px" }} alt="Logo" />
        <p className="logoText">Write your own tale...</p>
      </span>
      <div className="registrationInner">
        {/* Text */}
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
          <div className="passwordWrapper">
            <input
              type={showPassword ? "text" : "password"} // Show text if showPassword is true
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <label className="customChekbox">
              <input
                type="checkbox"
                onChange={() => setShowPassword((prev) => !prev)}
              />
              <span className="check"></span>
              Show Password
            </label>
          </div>

          {/* Button */}
          <button className="buttonOne">Sign Up</button>
        </form>
      </div>
    </main>
  );
};

export default SignUp;
