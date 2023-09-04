import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { Fade } from "react-awesome-reveal";
import logo from "../../images/logo.svg";
import { sendEmailVerification } from "firebase/auth"; // Import sendEmailVerification

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { createUser, updateProfile } = UserAuth(); // Also using updateProfile function
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Create user account
      const newUserCredential = await createUser(email, password);

      // Update user's display name (can be done in updateProfile function)
      await updateProfile(newUserCredential.user, { displayName: email });

      // Send verification email
      await sendEmailVerification(newUserCredential.user);

      toast(
        "Congratulations! You have signed up successfully. Please check your email for verification.",
        {
          type: "success",
        }
      );

      navigate("/account");
    } catch (err) {
      setError(err.message);
      toast(err.message, { type: "error" });
    }
  };

  // Send verification email function
  const sendEmailVerification = async (user) => {
    try {
      await sendEmailVerification(auth, user); // Correct call
      console.log("Verification email sent!");
    } catch (err) {
      console.error("Error sending verification email:", err);
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
