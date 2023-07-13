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
            <span className="slideSpan">{textPraragraphs}</span>
            <button
                className="fa-solid fa-chevron-right nextBtn"
                onClick={handleNext}
            ></button>
        </div>
    );
};
export default Slide;
