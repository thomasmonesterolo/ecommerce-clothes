import React, { useState, useEffect } from 'react';

const Slideshow = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Set up the interval to change the slide
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, interval);

        // Clear the interval when the component is unmounted
        return () => clearInterval(timer);
    }, [images.length, interval]);

    return (
        <div className="slideshow-container">
            <img src={images[currentIndex]} alt="slideshow" style={{ width: '100%' }} />
        </div>
    );
};

export default Slideshow;