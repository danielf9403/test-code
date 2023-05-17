
import React from 'react';




const ProjectCarousel = () => {
  const handleButtonClick = (projectName) => {
    console.log(`Clicked on ${projectName} button`);
    
  };

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
        
        <div className={`p-box `}>
          
            <button onClick={() => handleButtonClick('Portofolio')}>
            <a href="./portofolioPage.jsx">
              <span>Portofolio</span>
            </a >  
            </button>

          
        </div>
        
        <div className="p-box">
          <button onClick={() => handleButtonClick('Loading ...')}>
            <span>Loading ...</span>
          </button>
        </div>
        <div className="p-box">
          <button onClick={() => handleButtonClick('Loading ...')}>
            <span>Loading ...</span>
          </button>
        </div>
        <div className="p-box">
          <button onClick={() => handleButtonClick('Loading ...')}>
            <span>Loading ...</span>
          </button>
        </div>
        <div className="p-box">
          <button onClick={() => handleButtonClick('Project 6')}>
            <span>Loading ...</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCarousel;
