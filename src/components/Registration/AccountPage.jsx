import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";
import { toast } from "react-toastify";
import { Fade } from "react-awesome-reveal";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import UserPostsFeed from "./UserPostsFeed";

const AccountPage = () => {
  const { user, logout } = UserAuth();
  const { articles } = useData();
  const navigate = useNavigate();

  // handle Logout
  const handleLogout = async () => {
    try {
      await logout();
      toast("You have logged out successfully.", { type: "success" });
      navigate("/signin");
    } catch (err) {
      console.log(e.message);
      toast(err.message, { type: "error" });
    }
  };

  const hasUpdatedProfile = user && user.displayName && user.photoURL;

  return (
    <main className="registartionWrapper ">
      {/* Logo */}
      <span className="registrationLogo">
        <img src={logo} style={{ width: "200px" }} />
        <p className="logoText">Write your own tale...</p>
      </span>{" "}
      <div className="profilePageWrapper">
        <div className="profilePageInner">
          {/* Text */}
          <div className="profilePageText">
            <Fade delay={1e2} cascade damping={1e-1} duration={3000}>
              <h2>Your Profile</h2>
            </Fade>
            {hasUpdatedProfile ? (
              <div>
                <div>
                  <p>
                    <span
                      style={{
                        fontFamily: "'Laila', sans-serif",
                        fontWeight: "bold",
                      }}
                    >
                      Name:{" "}
                    </span>
                    {user.displayName}
                  </p>
                  <p>
                    <span
                      style={{
                        fontFamily: "'Laila', sans-serif",
                        fontWeight: "bold",
                      }}
                    >
                      Email:{" "}
                    </span>
                    {user.email}
                  </p>
                  {user.photoURL && (
                    <img
                      src={user.photoURL}
                      alt="User Avatar"
                      style={{ width: "100px" }}
                    />
                  )}
                </div>
                <Link className="missingPageLink" to="/profile">
                  Update your Profile
                </Link>
              </div>
            ) : (
              <Link className="missingPageLink" to="/profile">
                Create your Profile
              </Link>
            )}

            {/* Button */}
            <button className="buttonOne" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        </div>
        {articles.every((article) => article.userId !== user.uid) ? (
          <div>
            <p className="userPostsPara">
              {user.displayName || user.email} hasn't added any Tales.
            </p>
            <p className="userPostsPara">
              You haven't shared your Tale yet? <br />
              Unleash Your Creativity: Share Your Story Today!
              <Link className="userPostsLink" to="/article">
                <br />
                <Fade
                  delay={1e2}
                  cascade
                  damping={1e-1}
                  duration={3000}
                  direction="down"
                >
                  <button className="buttonOne">Add Your First Tale</button>
                </Fade>
              </Link>
            </p>
          </div>
        ) : (
          <div className="userPostsFeed">
            <Fade
              delay={1e2}
              cascade
              damping={1e-1}
              duration={3000}
              direction="down"
            >
              <h2 className="profilePageH2">
                {user.displayName || user.email}'s <br />
                Tales
              </h2>
            </Fade>
            <Fade
              delay={1e2}
              cascade
              damping={1e-1}
              duration={3000}
              direction="down"
            >
              <UserPostsFeed />
            </Fade>
          </div>
        )}
      </div>
    </main>
  );
};

export default AccountPage;
