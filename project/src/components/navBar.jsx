import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(

        <div className="navBar">
            <div className="links">
                <NavLink to="/"> <h2>Home</h2></NavLink>
                <NavLink to="/about"><h2>About Me</h2></NavLink>
                <NavLink to="/projects"><h2>Projects</h2></NavLink>
                <NavLink to="/resume"><h2>Resume</h2></NavLink>
                <NavLink to="/contact"><h2>Contact Me</h2></NavLink>
            </div>
        </div>

    );
}

export default Navbar