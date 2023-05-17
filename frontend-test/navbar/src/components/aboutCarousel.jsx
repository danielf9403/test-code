import React, { useState, useEffect } from "react";
import '../style.css';

function AboutCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  function incrementSlide() {
    setActiveSlide((prevState) => {
      if (prevState === 2) {
        // Maximum index reached, reset to 0
        return 0;
      } else {
        return prevState + 1;
      }
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      incrementSlide();
    }, 3000); // Change the number (in milliseconds) to adjust autoplay speed

    return () => clearInterval(interval);
  }, []);

  function handleRadioInputChange(event) {
    setActiveSlide(Number(event.target.value));
  }

  return (
    <div className="test">
        <div className="about-carousel">    
          <div className="carousel-pics div1" style={{ display: activeSlide === 0 ? "block" : "none" }}>         
          <div className="flag">
              <div className="flag-color red"></div>
              <div className="flag-color yellow"></div>
              <div className="flag-color blue"></div>
            </div>
          </div>    
          <div className="carousel-pics div2" style={{ display: activeSlide === 1 ? "block" : "none" }}>
            <div className="flag">
              <div className="flag-color red"></div>
              <div className="flag-color yellow"></div>
              <div className="flag-color blue"></div>
            </div>
          </div>    
          <div className="carousel-pics div3" style={{ display: activeSlide === 2 ? "block" : "none" }}>
            <div className="flag">
              <div className="flag-color red"></div>
              <div className="flag-color yellow"></div>
              <div className="flag-color blue"></div>
            </div>
          </div>
        </div>
        <div className="about-pic-carousel">
            <input checked={activeSlide === 0} onChange={handleRadioInputChange} type="radio" name="position" value="0" />
            <input checked={activeSlide === 1} onChange={handleRadioInputChange} type="radio" name="position" value="1" />
            <input checked={activeSlide === 2} onChange={handleRadioInputChange} type="radio" name="position" value="2" />
        </div>
    </div>

    
  );
}

export default AboutCarousel;
