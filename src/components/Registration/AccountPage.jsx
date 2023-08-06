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

  const hasUpdatedProfile = user && user.displayName && user.photoURL;

  return (
    <main className="registartionWrapper">
      {/* Logo */}
      <span className="registrationLogo">
        <img src={logo} style={{ width: "200px" }} />
        <p className="logoText">Write your own tale...</p>
      </span>
      <div className="registrationInner">
        {/* Text */}
        <div className="registrationText">
          <Fade delay={1e2} cascade damping={1e-1} duration={3000}>
            <h2>Your Account</h2>
          </Fade>
          {hasUpdatedProfile ? (
            <div>
              <h1>Profile</h1>
              <div>
                <p>Name: {user.displayName}</p>
                <p>Email: {user.email}</p>
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt="User Avatar"
                    style={{ width: "100px" }}
                  />
                )}
              </div>
              <Link to="/profile">Update your Profile</Link>
            </div>
          ) : (
            <Link to="/profile">Create your Profile</Link>
          )}

          {/* Button */}
          <button className="buttonOne" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </div>
    </main>
  );
};

export default AccountPage;
