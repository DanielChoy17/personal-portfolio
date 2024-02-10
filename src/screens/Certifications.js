import React, { useEffect } from "react";
import "./screens.css";
import { useDarkMode } from "../context/DarkModeContext";
import { Socials } from "../components/socials/Socials";
import UCSCLogo from "../assets/certificationIcons/UCSCLogo.png";
import PractitionerLogo from "../assets/certificationIcons/Practitioner.png";
import DeveloperLogo from "../assets/certificationIcons/Developer.png";
import Diploma from "../assets/documents/Diploma - Daniel Choy.pdf";

export const Certifications = () => {
    const { isDarkMode } = useDarkMode();

    const handleDiplomaClick = () => {
      const newWindow = window.open(Diploma, '_blank');
      if (newWindow) {
        newWindow.opener = null;
      }
    };

    const handlePractitionerClick = () => {
      const newWindow = window.open("https://www.credly.com/badges/86d961fd-df14-4a81-a384-89e5b4774d11/linked_in_profile", '_blank');
      if (newWindow) {
        newWindow.opener = null;
      }
    };

    const handleDeveloperClick = () => {
      const newWindow = window.open("https://www.credly.com/badges/c8f9b7fe-72bf-43d2-bb5b-4159b9b0c8c2/linked_in_profile", '_blank');
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
              Bachelor of Science in Computer Science
            </h1>

            <h3 className={isDarkMode ? 'dark-title' : 'title'}>
              University of California, Santa Cruz 🍌🐌
            </h3>

            <h5 className={isDarkMode ? 'dark-title' : 'title'}>
              Graduated with Honors in 3 Years (2020-2023)
            </h5>

            <h6 className={isDarkMode ? 'dark-title' : 'title'}>
              GPA: 3.76
            </h6>
            
            <button className={isDarkMode ? 'dark-button' : 'button'} onClick={handleDiplomaClick}>My Diploma</button>
          </div>

          <div className="picture-container">
            <img src={UCSCLogo} className="ucsc-logo" alt="UCSC"/>
          </div>
        </section>

        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <div className="flex-text-container">
            <h1 className={isDarkMode ? 'dark-title' : 'title'}>
              Certified Cloud Practitioner
            </h1>

            <h3 className={isDarkMode ? 'dark-title' : 'title'}>
              Amazon Web Services ☁️
            </h3>

            <h5 className={isDarkMode ? 'dark-title' : 'title'}>
              Obtained September 2023
            </h5>
            
            <button className={isDarkMode ? 'dark-button' : 'button'} onClick={handlePractitionerClick}>My Badge</button>
          </div>

          <div className="picture-container">
            <img src={PractitionerLogo} className="aws-logo" alt="Practitioner"/>
          </div>
        </section>

        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <div className="flex-text-container">
            <h1 className={isDarkMode ? 'dark-title' : 'title'}>
              Certified Developer - Associate
            </h1>

            <h3 className={isDarkMode ? 'dark-title' : 'title'}>
              Amazon Web Services ☁️
            </h3>

            <h5 className={isDarkMode ? 'dark-title' : 'title'}>
              Obtained November 2023
            </h5>
            
            <button className={isDarkMode ? 'dark-button' : 'button'} onClick={handleDeveloperClick}>My Badge</button>
          </div>

          <div className="picture-container">
            <img src={DeveloperLogo} className="aws-logo" alt="Developer"/>
          </div>
        </section>

        <Socials/>
      </div>
    );
};