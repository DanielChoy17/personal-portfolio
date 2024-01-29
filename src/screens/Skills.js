import React, { useEffect } from "react";
import "./screens.css";
import { useDarkMode } from "../context/DarkModeContext";
import { Socials } from "../components/socials/Socials";
import { LanguagesList } from "../components/languages/LanguagesIcons";

export const Skills = () => {
    const { isDarkMode } = useDarkMode();

    useEffect(() => {
      document.body.style.backgroundColor = isDarkMode ? '#000000' : '#ffffff';
    }, [isDarkMode]);

    return (
      <div className="container">
        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <div className="text-container">
            <h1 className={isDarkMode ? 'dark-title' : 'title'}>
              Languages I Speak
            </h1>

            <div className="bullets-container">
              <p className={isDarkMode ? 'dark-content' : 'content'}>
                ⭐English
              </p>
              <p className={isDarkMode ? 'dark-content' : 'content'}>
                ⭐Spanish
              </p>
            </div>
          </div>
        </section>

        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <div className="text-container">
            <h1 className={isDarkMode ? 'dark-title' : 'title'}>
                Programming Languages
            </h1>

            <LanguagesList/>
          </div>
        </section>

        <Socials/>
      </div>
    );
};