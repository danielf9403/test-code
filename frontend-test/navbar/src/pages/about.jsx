import React from "react";
import AboutCarousel from "../components/aboutCarousel";
const About = () => {
    return(
        <div className="about">
            <div className="about-pic">
                <AboutCarousel/>
            </div>
            <div className="about-name-paragraf">
                <div className="about-name">
                    <h1>DANIEL EMANUEL FUNARU</h1>
                    <h2>FULL STACK DEVELOPER</h2>
                </div>
                <div className="about-paragraf">
                    {/* <p> "Battle not with monsters lest you become one.
                        And if you gaze into the abyss, the abyss gazes also into you."
                    </p> */}
                    <p>I am someone who places great importance on personal growth and self-improvement. 
                        To that end, I prioritize staying active and engaged with new information. 
                        This includes working out regularly to stay in shape, as well as listening to audio books and podcasts to learn new things and expand my knowledge. 
                        I am fascinated by the latest advancements in science and technology and am always exploring new gadgets and devices that can improve my life. 
                        Additionally, I have a particular interest in space exploration and keep up-to-date with the latest missions and discoveries. 
                        For me, staying informed and exploring the mysteries of the universe is an essential part of my personal growth journey. 
                        Overall, my curiosity and drive to better myself through learning and exploration are integral parts of who I am.</p>
                </div>
            </div>
        </div>
    );
}

export default About;