import { useState } from "react";
import "./Slideshow.css";

function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 1) {
    return (
      <div className="slideshow">
        <img src={images[0]} alt="Appartement" className="slideshow-image" />
      </div>
    );
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slideshow">
      <img
        src={images[currentIndex]}
        alt={`Appartement ${currentIndex + 1}`}
        className="slideshow-image"
      />

      <button
        onClick={goToPrevious}
        className="slideshow-button slideshow-button-prev"
        aria-label="Image précédente"
      >
        ❮
      </button>

      <button
        onClick={goToNext}
        className="slideshow-button slideshow-button-next"
        aria-label="Image suivante"
      >
        ❯
      </button>

      <div className="slideshow-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

export default Slideshow;
