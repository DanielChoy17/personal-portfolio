import React, { useEffect } from "react";
import "./screens.css";
import { useDarkMode } from "../context/DarkModeContext";
import { Socials } from "../components/socials/Socials";
import MePicture from "./MePicture.jpg";

export const Home = () => {
    const { isDarkMode } = useDarkMode();

    useEffect(() => {
      document.body.style.backgroundColor = isDarkMode ? '#000000' : '#ffffff';
    }, [isDarkMode]);


    return (
      <div className="container">
        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <div className="text-container">
            <h1 className={isDarkMode ? 'dark-title' : 'title'}>
              Home
            </h1>
            <p className={isDarkMode ? 'dark-content' : 'content'}>
              Your content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Your content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Your content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Your content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Your content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Your content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Your content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
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

        <Socials/>
      </div>
    );
};