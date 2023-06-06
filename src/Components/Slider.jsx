import { useState } from "react";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};
const buttonSty = {
  width: "100px",
  height: "50px",
  outline: "0",
  border: "0",
  backgroundColor: "purple",
  color: "white",
  margin: "100px 10px 30px 90px",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "16px",
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const Previous = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? 0 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const Next = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? slides.length - 1 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div style={sliderStyles}>
      {/* <h2 >Welcome to our Slider</h2> */}
      <div>
        <button style={buttonSty} onClick={Previous}>
          Next
        </button>
        <button style={buttonSty} onClick={Next}>
          Previous
        </button>
      </div>
      <div style={slideStylesWidthBackground}></div>
    </div>
  );
};

export default ImageSlider;
