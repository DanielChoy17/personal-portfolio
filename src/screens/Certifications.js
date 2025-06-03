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
import MetaCourseTwoCertificate from "../assets/documents/Meta Programming in Python Certificate.pdf";
import MetaCourseThreeCertificate from "../assets/documents/Meta Version Control Certificate.pdf";
import JenkinsLogo from "../assets/certificationIcons/JenkinsLogo.png";
import JenkinsCertificate from "../assets/documents/Udemy Jenkins Certificate.pdf";
import MetaCourseFourCertificate from "../assets/documents/Meta Introduction to Databases for Back-End Development Certificate.pdf"
import DeepLearningAILogo from "../assets/certificationIcons/DeepLearningAILogo.png";
import GenerativeAICertificate from "../assets/documents/Generative AI with Large Language Models Certificate.pdf";
import GitHubLogo from "../assets/toolIcons/Github.png";
import GitHubCourseOneCertificate from "../assets/documents/Learning Git and GitHub Certificate.pdf";
import GitHubCourseTwoCertificate from "../assets/documents/GitHub Issues and Projects for Teams Certificate.pdf";
import GitHubCourseThreeCertificate from "../assets/documents/Practical GitHub Actions Certificate.pdf";
import GitHubCourseFourCertificate from "../assets/documents/Practical GitHub Copilot Certificate.pdf";
import GitHubCourseFiveCertificate from "../assets/documents/Learning GitHub Codespaces for Enterprise Certificate.pdf";
import GitHubCourseSixCertificate from "../assets/documents/GitHub Foundations Privacy, Security, and Administration Certificate.pdf";
import GitHubCourseSevenCertificate from "../assets/documents/Benefits of GitHub Community Certificate.pdf";
import GitHubLearningPathCertificate from "../assets/documents/Prepare for the GitHub Foundations Certification Learning Path Certificate.pdf";

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

    const handleMetaCourseTwoCertificateClick = () => {
      const newWindow = window.open(MetaCourseTwoCertificate, '_blank');
      if (newWindow) {
        newWindow.opener = null;
      }
    };

    const handleMetaCourseThreeCertificateClick = () => {
      const newWindow = window.open(MetaCourseThreeCertificate, '_blank');
      if (newWindow) {
        newWindow.opener = null;
      }
    };

    const handleJenkinsCertificateClick = () => {
      const newWindow = window.open(JenkinsCertificate, '_blank');
      if (newWindow) {
        newWindow.opener = null;
      }
    }

    const handleMetaCourseFourCertificateClick = () => {
      const newWindow = window.open(MetaCourseFourCertificate, '_blank');
      if (newWindow) {
        newWindow.opener = null;
      }
    };

    const handleGenerativeAICertificateClick = () => {
      const newWindow = window.open(GenerativeAICertificate, '_blank');
      if (newWindow) {
        newWindow.opener = null;
      }
    };

    const handleGitHubCourseOneCertificateClick = () => {
      const newWindow = window.open(GitHubCourseOneCertificate, '_blank');
      if (newWindow) {
        newWindow.opener = null;
      }
    };

    const handleGitHubCourseTwoCertificateClick = () => {
      const newWindow = window.open(GitHubCourseTwoCertificate, '_blank');
      if (newWindow) {
        newWindow.opener = null;
      }
    };

    const handleGitHubCourseThreeCertificateClick = () => {
      const newWindow = window.open(GitHubCourseThreeCertificate, '_blank');
      if (newWindow) {
        newWindow.opener = null;
      }
    };

    const handleGitHubCourseFourCertificateClick = () => {
      const newWindow = window.open(GitHubCourseFourCertificate, '_blank');
      if (newWindow) {
        newWindow.opener = null;
      }
    };

    const handleGitHubCourseFiveCertificateClick = () => {
      const newWindow = window.open(GitHubCourseFiveCertificate, '_blank');
      if (newWindow) {
        newWindow.opener = null;
      }
    };

    const handleGitHubCourseSixCertificateClick = () => {
      const newWindow = window.open(GitHubCourseSixCertificate, '_blank');
      if (newWindow) {
        newWindow.opener = null;
      }
    };

    const handleGitHubCourseSevenCertificateClick = () => {
      const newWindow = window.open(GitHubCourseSevenCertificate, '_blank');
      if (newWindow) {
        newWindow.opener = null;
      }
    };

    const handleGitHubLearningPathCertificateClick = () => {
      const newWindow = window.open(GitHubLearningPathCertificate, '_blank');
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
              Prepare for the GitHub Foundations Certification
            </h1>

            <h3 className={isDarkMode ? 'dark-title' : 'title'}>
              Linkedin Learning Path in Partnership with GitHub 📚
            </h3>

            <h5 className={isDarkMode ? 'dark-title' : 'title'}>
              Obtained June 2025
            </h5>
            
            <button className={isDarkMode ? 'dark-button' : 'button'} onClick={handleGitHubLearningPathCertificateClick}>My Certificate</button>
          </div>

          <div className="picture-container">
            <img src={GitHubLogo} className="github-logo" alt="GitHub"/>
          </div>
        </section>

        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <div className="flex-text-container">
            <h1 className={isDarkMode ? 'dark-title' : 'title'}>
              Benefits of GitHub Community
            </h1>

            <h3 className={isDarkMode ? 'dark-title' : 'title'}>
              Linkedin Learning Course by Ray Villalobos 📚
            </h3>

            <h5 className={isDarkMode ? 'dark-title' : 'title'}>
              Obtained June 2025
            </h5>
            
            <button className={isDarkMode ? 'dark-button' : 'button'} onClick={handleGitHubCourseSevenCertificateClick}>My Certificate</button>
          </div>

          <div className="picture-container">
            <img src={GitHubLogo} className="github-logo" alt="GitHub"/>
          </div>
        </section>
        
        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <div className="flex-text-container">
            <h1 className={isDarkMode ? 'dark-title' : 'title'}>
              GitHub Foundations: Privacy, Security, and Administration
            </h1>

            <h3 className={isDarkMode ? 'dark-title' : 'title'}>
              Linkedin Learning Course by Noah Gift 📚
            </h3>

            <h5 className={isDarkMode ? 'dark-title' : 'title'}>
              Obtained May 2025
            </h5>
            
            <button className={isDarkMode ? 'dark-button' : 'button'} onClick={handleGitHubCourseSixCertificateClick}>My Certificate</button>
          </div>

          <div className="picture-container">
            <img src={GitHubLogo} className="github-logo" alt="GitHub"/>
          </div>
        </section>

        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <div className="flex-text-container">
            <h1 className={isDarkMode ? 'dark-title' : 'title'}>
              Learning GitHub Codespaces for Enterprise
            </h1>

            <h3 className={isDarkMode ? 'dark-title' : 'title'}>
              Linkedin Learning Course by Fikayo Adepoju 📚
            </h3>

            <h5 className={isDarkMode ? 'dark-title' : 'title'}>
              Obtained May 2025
            </h5>
            
            <button className={isDarkMode ? 'dark-button' : 'button'} onClick={handleGitHubCourseFiveCertificateClick}>My Certificate</button>
          </div>

          <div className="picture-container">
            <img src={GitHubLogo} className="github-logo" alt="GitHub"/>
          </div>
        </section>
        
        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <div className="flex-text-container">
            <h1 className={isDarkMode ? 'dark-title' : 'title'}>
              Practical GitHub Copilot
            </h1>

            <h3 className={isDarkMode ? 'dark-title' : 'title'}>
              Linkedin Learning Course by Ray Villalobos 📚
            </h3>

            <h5 className={isDarkMode ? 'dark-title' : 'title'}>
              Obtained May 2025
            </h5>
            
            <button className={isDarkMode ? 'dark-button' : 'button'} onClick={handleGitHubCourseFourCertificateClick}>My Certificate</button>
          </div>

          <div className="picture-container">
            <img src={GitHubLogo} className="github-logo" alt="GitHub"/>
          </div>
        </section>
        
        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <div className="flex-text-container">
            <h1 className={isDarkMode ? 'dark-title' : 'title'}>
              Practical GitHub Actions
            </h1>

            <h3 className={isDarkMode ? 'dark-title' : 'title'}>
              Linkedin Learning Course by Ray Villalobos 📚
            </h3>

            <h5 className={isDarkMode ? 'dark-title' : 'title'}>
              Obtained May 2025
            </h5>
            
            <button className={isDarkMode ? 'dark-button' : 'button'} onClick={handleGitHubCourseThreeCertificateClick}>My Certificate</button>
          </div>

          <div className="picture-container">
            <img src={GitHubLogo} className="github-logo" alt="GitHub"/>
          </div>
        </section>

        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <div className="flex-text-container">
            <h1 className={isDarkMode ? 'dark-title' : 'title'}>
              GitHub Issues and Projects for Teams
            </h1>

            <h3 className={isDarkMode ? 'dark-title' : 'title'}>
              Linkedin Learning Course by Teresa Luz Miller 📚
            </h3>

            <h5 className={isDarkMode ? 'dark-title' : 'title'}>
              Obtained February 2025
            </h5>
            
            <button className={isDarkMode ? 'dark-button' : 'button'} onClick={handleGitHubCourseTwoCertificateClick}>My Certificate</button>
          </div>

          <div className="picture-container">
            <img src={GitHubLogo} className="github-logo" alt="GitHub"/>
          </div>
        </section>

        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <div className="flex-text-container">
            <h1 className={isDarkMode ? 'dark-title' : 'title'}>
              Learning Git and GitHub
            </h1>

            <h3 className={isDarkMode ? 'dark-title' : 'title'}>
              Linkedin Learning Course by Ray Villalobos 📚
            </h3>

            <h5 className={isDarkMode ? 'dark-title' : 'title'}>
              Obtained February 2025
            </h5>
            
            <button className={isDarkMode ? 'dark-button' : 'button'} onClick={handleGitHubCourseOneCertificateClick}>My Certificate</button>
          </div>

          <div className="picture-container">
            <img src={GitHubLogo} className="github-logo" alt="GitHub"/>
          </div>
        </section>

        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <div className="flex-text-container">
            <h1 className={isDarkMode ? 'dark-title' : 'title'}>
              Generative AI with Large Language Models
            </h1>

            <h3 className={isDarkMode ? 'dark-title' : 'title'}>
              AWS ☁️ + DeepLearning.AI 👾
            </h3>

            <h5 className={isDarkMode ? 'dark-title' : 'title'}>
              Obtained August 2024
            </h5>
            
            <button className={isDarkMode ? 'dark-button' : 'button'} onClick={handleGenerativeAICertificateClick}>My Certificate</button>
          </div>

          <div className="picture-container">
            <img src={DeepLearningAILogo} className="deeplearningai-logo" alt="DeepLearningAI"/>
          </div>
        </section>
        
        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <div className="flex-text-container">
            <h1 className={isDarkMode ? 'dark-title' : 'title'}>
              Introduction to Databases for Back-End Development
            </h1>

            <h3 className={isDarkMode ? 'dark-title' : 'title'}>
              Meta 💻
            </h3>

            <h5 className={isDarkMode ? 'dark-title' : 'title'}>
              Obtained June 2024
            </h5>
            
            <button className={isDarkMode ? 'dark-button' : 'button'} onClick={handleMetaCourseFourCertificateClick}>My Certificate</button>
          </div>

          <div className="picture-container">
            <img src={MetaLogo} className="meta-logo" alt="Meta"/>
          </div>
        </section>
        
        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <div className="flex-text-container">
            <h1 className={isDarkMode ? 'dark-title' : 'title'}>
              CI/CD with Jenkins using Pipelines and Docker
            </h1>

            <h3 className={isDarkMode ? 'dark-title' : 'title'}>
              Udemy Course by Edward Viaene ⛎
            </h3>

            <h5 className={isDarkMode ? 'dark-title' : 'title'}>
              Obtained May 2024
            </h5>
            
            <button className={isDarkMode ? 'dark-button' : 'button'} onClick={handleJenkinsCertificateClick}>My Certificate</button>
          </div>

          <div className="picture-container">
            <img src={JenkinsLogo} className="jenkins-logo" alt="Jenkins"/>
          </div>
        </section>

        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <div className="flex-text-container">
            <h1 className={isDarkMode ? 'dark-title' : 'title'}>
              Version Control
            </h1>

            <h3 className={isDarkMode ? 'dark-title' : 'title'}>
              Meta 💻
            </h3>

            <h5 className={isDarkMode ? 'dark-title' : 'title'}>
              Obtained May 2024
            </h5>
            
            <button className={isDarkMode ? 'dark-button' : 'button'} onClick={handleMetaCourseThreeCertificateClick}>My Certificate</button>
          </div>

          <div className="picture-container">
            <img src={MetaLogo} className="meta-logo" alt="Meta"/>
          </div>
        </section>

        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <div className="flex-text-container">
            <h1 className={isDarkMode ? 'dark-title' : 'title'}>
              Programming in Python
            </h1>

            <h3 className={isDarkMode ? 'dark-title' : 'title'}>
              Meta 💻
            </h3>

            <h5 className={isDarkMode ? 'dark-title' : 'title'}>
              Obtained April 2024
            </h5>
            
            <button className={isDarkMode ? 'dark-button' : 'button'} onClick={handleMetaCourseTwoCertificateClick}>My Certificate</button>
          </div>

          <div className="picture-container">
            <img src={MetaLogo} className="meta-logo" alt="Meta"/>
          </div>
        </section>

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