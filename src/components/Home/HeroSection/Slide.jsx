import { Fade } from "react-awesome-reveal";
import "../HomePageStyle.css";

const Slide = ({
  backgroundImage,
  textPraragraphs,
  handleNext,
  handlePrev,
}) => {
  return (
    <div className="slide" style={{ backgroundImage: backgroundImage }}>
      <button
        onClick={handlePrev}
        className="fa-solid fa-chevron-left prevBtn"
      ></button>
      <Fade
        className="blogPageDMFade"
        delay={1e2}
        cascade
        damping={1e-1}
        duration={3000}
      >
        <span className="slideSpan">{textPraragraphs}</span>
      </Fade>
      <button
        className="fa-solid fa-chevron-right nextBtn"
        onClick={handleNext}
      ></button>
    </div>
  );
};
export default Slide;
