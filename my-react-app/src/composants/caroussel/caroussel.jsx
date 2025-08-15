import React, { useState } from 'react';
import './caroussel.scss';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (images.length === 1) {
    return (
      <div className="carousel">
        <img src={images[0]} alt="Logement" className="carousel__image" />
      </div>
    );
  }

  return (
    <div className="carousel">
      <img
        src={images[currentIndex]}
        alt={`Logement ${currentIndex + 1}`}
        className="carousel__image"
      />
      <button className="carousel__arrow carousel__arrow--left" onClick={goToPrevious}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="carousel__arrow carousel__arrow--right" onClick={goToNext}>
        <i className="fas fa-chevron-right"></i>
      </button>
      <div className="carousel__counter">
        {currentIndex + 1}/{images.length}
      </div>
    </div>
  );
};

export default Carousel;
