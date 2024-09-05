import React, { useState } from 'react';
import './ImageSlider.css'; // Asegúrate de crear este archivo CSS

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="slider">
            <button className="slider-button prev" onClick={handlePrevious}>
                &#10094;
            </button>
            <div className="slider-image">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            </div>
            <button className="slider-button next" onClick={handleNext}>
                &#10095;
            </button>
        </div>
    );
};

export default ImageSlider;

