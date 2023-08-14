import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { Fade } from "react-awesome-reveal";

const Missing = () => {
  return (
    <main className="registartionWrapper">
      {/* Logo */}
      <span className="registrationLogo">
        <img src={logo} style={{ width: "200px" }} />
        <p className="logoText">Write your own tale...</p>
      </span>
      <div className="registrationInner">
        <div className="registrationText">
          <p className="missingPagePara">Page Not Found</p>
          <Fade delay={1e2} cascade damping={1e-1} duration={3000}>
            <h2>404</h2>
          </Fade>
          <p className="missingPageParaLink">
            <Link className="missingPageLink" to="/">
              Visit Our Homepage
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Missing;
