import React, { useEffect } from "react";
import "./screens.css";
import { useDarkMode } from "../context/DarkModeContext";
import { Socials } from "../components/socials/Socials";
import Diploma from "../assets/Diploma - Daniel Choy.pdf";

export const Certifications = () => {
    const { isDarkMode } = useDarkMode();

    const handleDiplomaClick = () => {
      const newWindow = window.open(Diploma, '_blank');
      if (newWindow) {
        newWindow.opener = null;
      }
    };

    useEffect(() => {
      document.body.style.backgroundColor = isDarkMode ? '#000000' : '#ffffff';
    }, [isDarkMode]);

    return (
      <div className="container">
        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <div className="text-container">
            <h1 className={isDarkMode ? 'dark-title' : 'title'}>
              Bachelor of Science in Computer Science
            </h1>

            <h3 className={isDarkMode ? 'dark-title' : 'title'}>
              University of California, Santa Cruz 🍌🐌
            </h3>

            <h5 className={isDarkMode ? 'dark-title' : 'title'}>
              Graduated with Honors in 3 Years (2020-2023)
            </h5>
            
            <button className={isDarkMode ? 'dark-button' : 'button'} onClick={handleDiplomaClick}>My Diploma</button>
          </div>
        </section>

        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <div className="text-container">
            <h1 className={isDarkMode ? 'dark-title' : 'title'}>
              Certifications
            </h1>
            <p className={isDarkMode ? 'dark-content' : 'content'}>
              Your content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </section>

        <Socials/>
      </div>
    );
};