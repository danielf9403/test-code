import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




import Projects from "./pages/projects";

import './App.css';



function App() {
  return(
    
      <div className="app-body">
        <Router>
          
          <div className="app-wrap">
            
            <div className="app-main">
                
                  <Projects/>
                
            </div>
          </div>
        </Router>
      </div>

  
 
  );
}

export default App;