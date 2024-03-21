import React, { useEffect } from "react";
import "./screens.css";
import { useDarkMode } from "../context/DarkModeContext";
import { Socials } from "../components/socials/Socials";
import UCSCLogo from "../assets/certificationIcons/UCSCLogo.png";
import Diploma from "../assets/documents/Diploma - Daniel Choy.pdf";
import PractitionerLogo from "../assets/certificationIcons/Practitioner.png";
import PractitionerCertificate from "../assets/documents/AWS Certified Cloud Practitioner Certificate.pdf";
import DeveloperLogo from "../assets/certificationIcons/Developer.png";
import DeveloperCertificate from "../assets/documents/AWS Certified Developer - Associate Certificate.pdf";
import MetaLogo from "../assets/certificationIcons/MetaLogo.png";
import MetaCourseOneCertificate from "../assets/documents/Meta Introduction to Back-End Development Certificate.pdf";

export const Certifications = () => {
    const { isDarkMode } = useDarkMode();

    const handleDiplomaClick = () => {
      const newWindow = window.open(Diploma, '_blank');
      if (newWindow) {
        newWindow.opener = null;
      }
    };

    const handlePractitionerBadgeClick = () => {
      const newWindow = window.open("https://www.credly.com/badges/86d961fd-df14-4a81-a384-89e5b4774d11/linked_in_profile", '_blank');
      if (newWindow) {
        newWindow.opener = null;
      }
    };

    const handlePractitionerCertificateClick = () => {
      const newWindow = window.open(PractitionerCertificate, '_blank');
      if (newWindow) {
        newWindow.opener = null;
      }
    };

    const handleDeveloperBadgeClick = () => {
      const newWindow = window.open("https://www.credly.com/badges/c8f9b7fe-72bf-43d2-bb5b-4159b9b0c8c2/linked_in_profile", '_blank');
      if (newWindow) {
        newWindow.opener = null;
      }
    };

    const handleDeveloperCertificateClick = () => {
      const newWindow = window.open(DeveloperCertificate, '_blank');
      if (newWindow) {
        newWindow.opener = null;
      }
    };

    const handleMetaCourseOneCertificateClick = () => {
      const newWindow = window.open(MetaCourseOneCertificate, '_blank');
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
              Introduction to Back-End Development
            </h1>

            <h3 className={isDarkMode ? 'dark-title' : 'title'}>
              Meta 💻
            </h3>

            <h5 className={isDarkMode ? 'dark-title' : 'title'}>
              Obtained March 2024
            </h5>
            
            <button className={isDarkMode ? 'dark-button' : 'button'} onClick={handleMetaCourseOneCertificateClick}>My Certificate</button>
          </div>

          <div className="picture-container">
            <img src={MetaLogo} className="meta-logo" alt="Meta"/>
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
            
            <div className="button-container">
              <button className={isDarkMode ? 'dark-button' : 'button'} onClick={handleDeveloperBadgeClick}>My Badge</button>
              <button className={isDarkMode ? 'dark-button' : 'button'} onClick={handleDeveloperCertificateClick}>My Certificate</button>
            </div>
          </div>

          <div className="picture-container">
            <img src={DeveloperLogo} className="aws-logo" alt="Developer"/>
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
            
            <div className="button-container">
              <button className={isDarkMode ? 'dark-button' : 'button'} onClick={handlePractitionerBadgeClick}>My Badge</button>
              <button className={isDarkMode ? 'dark-button' : 'button'} onClick={handlePractitionerCertificateClick}>My Certificate</button>
            </div>
          </div>

          <div className="picture-container">
            <img src={PractitionerLogo} className="aws-logo" alt="Practitioner"/>
          </div>
        </section>

        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <div className="flex-text-container">
            <h1 className={isDarkMode ? 'dark-title' : 'title'}>
              Bachelor of Science in Computer Science
            </h1>

            <h3 className={isDarkMode ? 'dark-title' : 'title'}>
              University of California, Santa Cruz 🐌
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

        <Socials/>
      </div>
    );
};