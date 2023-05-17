import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from './components/navBar';
import Sidebar from "./components/sideBar";

import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import { Contact } from "./pages/contact";
import Resume from "./pages/resume";

import './App.css';
import './style.css';


function App() {
  return(
    
      <div className="app-body">
        <Router>
          <div className="app-nav">
            <NavBar />
          </div>
          <div className="app-wrap">
            <div className="app-side">
              <Sidebar/>
            </div>
            <div className="app-main">
                <Routes>
                  <Route exact path="/" element={<Home/>} />
                  <Route path="/contact" element={<Contact/>} />
                  <Route path="/about" element={<About/>} />
                  <Route path="/projects" element={<Projects/>} />
                  <Route path="/resume" element={<Resume />} />
                </Routes>
            </div>
          </div>
        </Router>
      </div>

  
 
  );
}

export default App;