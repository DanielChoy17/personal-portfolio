import React, { useEffect } from "react";
import "./screens.css";
import { useDarkMode } from "../context/DarkModeContext";
import { Socials } from "../components/socials/Socials";
import { LanguagesList } from "../components/languages/LanguagesIcons";
import MePicture from "../assets/MePicture.jpg";
import Resume from "../assets/Resume - Daniel Choy.pdf";

export const Home = () => {
    const { isDarkMode } = useDarkMode();

    const handleResumeClick = () => {
      const newWindow = window.open(Resume, '_blank');
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
          <div className="flex-text-container">
            <h1 className={isDarkMode ? 'dark-title' : 'title'}>
              Home
            </h1>
            <p className={isDarkMode ? 'dark-content' : 'content'}>
              Your content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Your content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Your content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Your content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Your content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Your content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Your content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className={isDarkMode ? 'dark-button' : 'button'} onClick={handleResumeClick}>My Resume</button>
          </div>
          
          <div className="picture-container">
            <img src={MePicture} className="me-picture" alt="Me"/>
          </div>
        </section>

        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <div className="text-container">
            <h1 className={isDarkMode ? 'dark-title' : 'title'}>
              Home
            </h1>
            <p className={isDarkMode ? 'dark-content' : 'content'}>
              Your content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </section>

        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <LanguagesList/>

          <h1 className={isDarkMode ? 'dark-title' : 'title'}>
              Programming Languages
          </h1>
        </section>

        <Socials/>
      </div>
    );
};