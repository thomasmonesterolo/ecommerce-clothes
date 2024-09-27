import React, { useState, useEffect } from 'react';
import './Slidshow.css'

const Slideshow = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    return (
        <div className="slideshow-container">
            {images.length > 0 && images[currentIndex].endsWith('.mp4') ?(
                <video autoPlay loop muted style={{ width: '100%' }}>
                   <source src={images[currentIndex]} type="video/mp4" />
                    Tu navegador no soporta el video.
               </video>
    ):(
            
                <img src={images[currentIndex]} alt="slideshow" style={{ width: '100%' }} />
            )}
        </div>
    );
};

export default Slideshow;

//const Slideshow = ({ images, interval = 3000 }) => {
   // const [currentIndex, setCurrentIndex] = useState(0);

    //useEffect(() => {
        // Set up the interval to change the slide
      //  const timer = setInterval(() => {
        //    setCurrentIndex((prevIndex) =>
          //      prevIndex === images.length - 1 ? 0 : prevIndex + 1
            //);
        //}, interval);

        // Clear the interval when the component is unmounted
        //return () => clearInterval(timer);
    //}, [images.length, interval]);
    

    //return (
      //  <div className="slideshow-container">
        //      {images[currentIndex].endsWith('.mp4') ? (
             //   <video autoPlay loop muted style={{ width: '100%' }}>
         //           <source src={images[currentIndex]} type="video/mp4" />
           //     </video>
            //  ):(
       //     <img src={images[currentIndex]} alt="slideshow" style={{ width: '100%' }} />
             // )}
        //</div>
    //);
//};