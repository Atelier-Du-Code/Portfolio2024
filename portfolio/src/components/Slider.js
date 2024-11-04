import React, { useState } from 'react';
import '../styles/components/Slider.css'; 

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slider-image" />

        {/* Boutons de navigation */}
        <button onClick={prevSlide} className="slider-button slider-button-prev">‹</button>
        <button onClick={nextSlide} className="slider-button slider-button-next">›</button>
      </div>

      {/* Indicateurs */}
      <div className="slider-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
