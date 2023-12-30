import React, { useEffect } from "react";
import "./screens.css";
import { useDarkMode } from "../context/DarkModeContext";
import { Socials } from "../components/socials/Socials";

export const Projects = () => {
    const { isDarkMode } = useDarkMode();

    useEffect(() => {
      document.body.style.backgroundColor = isDarkMode ? '#000000' : '#ffffff';
    }, [isDarkMode]);

    return (
      <div className="container">
        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <h1 className={isDarkMode ? 'dark-title' : 'title'}>
            Project
          </h1>
          <p className={isDarkMode ? 'dark-content' : 'content'}>
            Your content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Your content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Your content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Your content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Your content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Your content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Your content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </section>

        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <h1 className={isDarkMode ? 'dark-title' : 'title'}>
            Project
          </h1>
          <p className={isDarkMode ? 'dark-content' : 'content'}>
            Your content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </section>

        <Socials/>
      </div>
    );
};