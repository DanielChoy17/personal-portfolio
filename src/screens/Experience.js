import React, { useEffect } from "react";
import "./screens.css";
import { useDarkMode } from "../context/DarkModeContext";
import { Socials } from "../components/socials/Socials";

import AtlasLogo from "../assets/experienceIcons/Atlas.png";
import AtlasTeam from "../assets/experienceIcons/AtlasTeam.JPG";
import TutorLogo from "../assets/experienceIcons/Tutor.png";
import NozomiIndividual from "../assets/experienceIcons/NozomiIndividual.JPG";
import BaskinEng from "../assets/experienceIcons/BaskinEng.JPG";
import NozomiTeam from "../assets/experienceIcons/NozomiTeam.JPG";

export const Experience = () => {
    const { isDarkMode } = useDarkMode();

    useEffect(() => {
      document.body.style.backgroundColor = isDarkMode ? '#000000' : '#ffffff';
    }, [isDarkMode]);

    return (
      <div className="container">
        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <div className="flex-text-container">
            <h1 className={isDarkMode ? 'dark-title' : 'title'}>
              Software Engineer 1
            </h1>

            <h3 className={isDarkMode ? 'dark-title' : 'title'}>
              Atlas Technical Consultants
            </h3>

            <h5 className={isDarkMode ? 'dark-title' : 'title'}>
              December 2024 - Present
            </h5>

            <p className={isDarkMode ? 'dark-content-left' : 'content-left'}>
              <ul>
                <li className="main-bullet">Wrote code for both front-end and back-end (full-stack developer role).</li>
                <li className="main-bullet">Optimized applications for security, performance, and operation on various devices.</li>
                <li className="main-bullet">Designed and implemented data storage solutions while ensuring data integrity and security.</li>
              </ul>
            </p>
          </div>

          <div className="picure-container">
            <div className="two-picture-container">
              <div className="individual-picture">
                <img src={AtlasLogo} className="atlas-logo" alt="Atlas"/>
              </div>

              <div className="individual-picture">
                <img src={AtlasTeam} className="atlas-team" alt="Atlas"/>
              </div>
            </div>
          </div>
        </section>

        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <div className="flex-text-container">
            <h1 className={isDarkMode ? 'dark-title' : 'title'}>
              Python and C++ Tutor
            </h1>

            <h3 className={isDarkMode ? 'dark-title' : 'title'}>
              The Princeton Review’s Tutor.com
            </h3>

            <h5 className={isDarkMode ? 'dark-title' : 'title'}>
              October 2023 - Present
            </h5>

            <p className={isDarkMode ? 'dark-content-left' : 'content-left'}>
              <ul>
                <li className="main-bullet">
                  Helped students with their programming assignments and understand concepts for their class.
                </li>
              </ul>
            </p>
          </div>

          <div className="picture-container">
            <img src={TutorLogo} className="tutor-logo" alt="Tutor"/>
          </div>
        </section>

        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <div className="flex-text-container">
            <h1 className={isDarkMode ? 'dark-title' : 'title'}>
              Apps Engineer Intern
            </h1>

            <h3 className={isDarkMode ? 'dark-title' : 'title'}>
              Nozomi Networks
            </h3>

            <h5 className={isDarkMode ? 'dark-title' : 'title'}>
              July 2022 - November 2022
            </h5>

            <p className={isDarkMode ? 'dark-content-left' : 'content-left'}>
              <ul>
                <li className="main-bullet">Used ARGOS Labs’ Robotic Process Automation (RPA) to create BOTs that automate HR and IT manual processes.
                  <ul className="sub-bullet">
                    <li>Used JavaScript and HTML to achieve certain operations and unit tested to ensure correct functionality in the BOTs</li>
                  </ul>
                </li>
                <li className="main-bullet">Assisted with data mapping between Greenhouse Recruiting, Greenhouse Onboarding, and BambooHR to provide developers with the specs needed to define their custom integration flows for the recruit-to-hire business process.</li>
                <li className="main-bullet">Deployed a new Security Awareness Training Course for the company in SkillJar (LMS) to replace the one in Advisera.
                  <ul className="sub-bullet">
                    <li>Resulted in the company’s training completion total to increase by 25% in order to reach compliance goals</li>
                  </ul>
                </li>
              </ul>
            </p>
          </div>

          <div className="picture-container">
            <img src={NozomiIndividual} className="nozomi-individual" alt="NozomiIndividual"/>
          </div>
        </section>

        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <div className="flex-text-container">
            <h1 className={isDarkMode ? 'dark-title' : 'title'}>
              Data Structures and Algorithms Tutor
            </h1>

            <h3 className={isDarkMode ? 'dark-title' : 'title'}>
              UCSC Jack Baskin Engineering
            </h3>

            <h5 className={isDarkMode ? 'dark-title' : 'title'}>
              March 2022 - June 2022
            </h5>

            <p className={isDarkMode ? 'dark-content-left' : 'content-left'}>
              <ul>
                <li className="main-bullet">
                  Helped students fix the bugs in their programming assignments and understand concepts for their class.
                </li>
              </ul>
            </p>
          </div>

          <div className="picture-container">
            <img src={BaskinEng} className="baskin-eng" alt="BaskinEngineering"/>
          </div>
        </section>

        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <div className="flex-text-container">
            <h1 className={isDarkMode ? 'dark-title' : 'title'}>
              Software Engineer/IT Ops Intern
            </h1>

            <h3 className={isDarkMode ? 'dark-title' : 'title'}>
              Nozomi Networks
            </h3>

            <h5 className={isDarkMode ? 'dark-title' : 'title'}>
              July 2021 - September 2021
            </h5>

            <p className={isDarkMode ? 'dark-content-left' : 'content-left'}>
              <ul>
                <li className="main-bullet">Developed workflows in BetterCloud to automate the account provisioning/de-provisioning process.
                  <ul className="sub-bullet">
                    <li>Used JavaScript and APIs to create Custom Integrations for my workflows</li>
                  </ul>
                </li>
                <li className="main-bullet">Helped with the On-boarding and Off-boarding of employees.
                  <ul className="sub-bullet">
                    <li>Used Freshservice ticketing system, Dropbox, and JAMF Cloud to help with the on/off-boarding process</li>
                    <li>Provisioned Azure AD/O365 accounts and set up computers for new employees</li>
                    <li>Disabled accounts for terminated employees and reset laptops and/or sent them for repair as needed</li>
                    <li>Ordered equipment needed for new hires when inventory was low and kept inventory updated</li>
                  </ul>
                </li>
              </ul>
            </p>
          </div>

          <div className="picture-container">
            <img src={NozomiTeam} className="nozomi-team" alt="NozomiTeam"/>
          </div>
        </section>

        <Socials/>
      </div>
    );
};