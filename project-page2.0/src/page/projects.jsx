import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';


const Projects = () => {
    const sliderRef = useRef(null);
  
    const goToPrevSlide = () => {
      if (sliderRef.current) {
        sliderRef.current.slickPrev();
      }
    };
  
    const goToNextSlide = () => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    };
  
    const settings = {
      dots: true,
      infinite: true,
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    return (
      <div>
        <h1>Vertical Carousel</h1>
        <Slider {...settings} ref={sliderRef}>
          <div>
            <h3>Slide 1</h3>
          </div>
          <div>
            <h3>Slide 2</h3>
          </div>
          <div>
            <h3>Slide 3</h3>
          </div>
        </Slider>
        <div>
          <button className="carousel-button" onClick={goToPrevSlide}>
            <FontAwesomeIcon icon={faChevronUp} />
          </button>
          <button className="carousel-button" onClick={goToNextSlide}>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
      </div>
    );
  };
  

export default Projects;