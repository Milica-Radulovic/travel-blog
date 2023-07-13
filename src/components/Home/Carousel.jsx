import { useState } from "react";
import Slide from "./Slide";

const Carousel = () => {
    const [index, setIndex] = useState(0);
    const length = 3;

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };

    return (
        <div className="carousel">
            <div className="carouselSlide">
                {index === 0 && (
                    <Slide
                        handleNext={handleNext}
                        handlePrev={handlePrevious}
                        backgroundImage="url(https://images.unsplash.com/photo-1529180184525-78f99adb8e98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)"
                        textPraragraphs={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                        }
                    ></Slide>
                )}
                {index === 1 && (
                    <Slide
                        handleNext={handleNext}
                        handlePrev={handlePrevious}
                        backgroundImage="url(https://images.unsplash.com/photo-1600186203774-769f73209d00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2013&q=80)"
                        textPraragraphs={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                        }
                    ></Slide>
                )}
                {index === 2 && (
                    <Slide
                        handleNext={handleNext}
                        handlePrev={handlePrevious}
                        backgroundImage="url(https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)"
                        textPraragraphs={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                        }
                    ></Slide>
                )}
            </div>
        </div>
    );
};

export default Carousel;
