import React, { useEffect } from "react";
import "./screens.css";
import { useDarkMode } from "../context/DarkModeContext";
import { Socials } from "../components/socials/Socials";
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
              Hello 👋
            </h1>
            <p className={isDarkMode ? 'dark-content' : 'content'}>
              My name is Daniel Choy. I recently graduated from UC Santa Cruz with a 
              Bachelor of Science in Computer Science. I am actively seeking software 
              engineering opportunities at tech companies to apply my skills and passion 
              for developing innovative software solutions.
            </p>
            
            <p className={isDarkMode ? 'dark-content' : 'content'}>
              Within Computer Science, I like to constantly learn about Artificial Intelligence, 
              Machine Learning, and the latest technologies Software Engineers are using today.
            </p>

            <p className={isDarkMode ? 'dark-content' : 'content'}>
              A little bit about myself. I grew up in the Bay Area and have a Miniature Schnuazer
              named Mish. In my free time if I am not learning, I like to play video games like
              Overwatch and Fifa, and also like to stay active whether it is in the gym or playing
              a sport, especially soccer.
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
              Hobbies
            </h1>
            
            <div className="multiple-bullets-container">
              <p className={isDarkMode ? 'dark-content' : 'content'}>
                ⭐Programming
              </p>
              <p className={isDarkMode ? 'dark-content' : 'content'}>
                ⭐Learning
              </p>
              <p className={isDarkMode ? 'dark-content' : 'content'}>
                ⭐Traveling
              </p>
            </div>

            <div className="bullets-container">
              <p className={isDarkMode ? 'dark-content' : 'content'}>
                ⭐Gym
              </p>
              <p className={isDarkMode ? 'dark-content' : 'content'}>
                ⭐Soccer
              </p>
              <p className={isDarkMode ? 'dark-content' : 'content'}>
                ⭐Video Games
              </p>
            </div>
          </div>
        </section>

        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <div className="text-container">
            <h1 className={isDarkMode ? 'dark-title' : 'title'}>
              College Clubs/Organizations
            </h1>
            
            <div className="multiple-bullets-container">
              <p className={isDarkMode ? 'dark-content' : 'content'}>
                ⭐UCSC Artificial Intelligence Club
              </p>
              <p className={isDarkMode ? 'dark-content' : 'content'}>
                ⭐Delta Sigma Pi (Professional Business Fraternity)
              </p>
              <p className={isDarkMode ? 'dark-content' : 'content'}>
                ⭐Chinese Student Association
              </p>
            </div>

            <div className="bullets-container">
              <p className={isDarkMode ? 'dark-content' : 'content'}>
                ⭐UCSC Intramural Sports (Soccer + Volleyball)
              </p>
            </div>
          </div>
        </section>

        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <div className="text-container">
            <h1 className={isDarkMode ? 'dark-title' : 'title'}>
              Key Classes Taken
            </h1>
            
            <div className="multiple-bullets-container">
              <p className={isDarkMode ? 'dark-content' : 'content'}>
                ⭐Artificial Intelligence
              </p>
              <p className={isDarkMode ? 'dark-content' : 'content'}>
                ⭐Applied Machine Learning
              </p>
              <p className={isDarkMode ? 'dark-content' : 'content'}>
                ⭐Database Systems
              </p>
            </div>

            <div className="bullets-container">
              <p className={isDarkMode ? 'dark-content' : 'content'}>
                ⭐Data Structures and Algorithms
              </p>
              <p className={isDarkMode ? 'dark-content' : 'content'}>
                ⭐Analysis of Algorithms
              </p>
              <p className={isDarkMode ? 'dark-content' : 'content'}>
                ⭐Computer Systems Design
              </p>
            </div>
          </div>
        </section>

        <Socials/>
      </div>
    );
};