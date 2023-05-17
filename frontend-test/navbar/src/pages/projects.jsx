
import React from 'react';


const ProjectCarousel = () => {
  const handleButtonClick = (projectName) => {
    console.log(`Clicked on ${projectName} button`);
  }

  return (
    <div className="p-container">
      <div className="p-carousel">
        <div className="p-box">
          <a href="https://github.com/danielf9403/milestone-one.git">
            <button onClick={() => handleButtonClick('Pac-Man')}>
              <span>Pac-Man</span>
            </button>
          </a>
        </div>
        <div className="p-box">
          <button onClick={() => handleButtonClick('Project 2')}>
            <span>Project 2</span>
          </button>
        </div>
        <div className="p-box">
          <button onClick={() => handleButtonClick('Project 3')}>
            <span>Project 3</span>
          </button>
        </div>
        <div className="p-box">
          <button onClick={() => handleButtonClick('Project 4')}>
            <span>Project 4</span>
          </button>
        </div>
        <div className="p-box">
          <button onClick={() => handleButtonClick('Project 5')}>
            <span>Project 5</span>
          </button>
        </div>
        <div className="p-box">
          <button onClick={() => handleButtonClick('Project 6')}>
            <span>Project 6</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCarousel;
