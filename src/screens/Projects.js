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
          <div className="text-container">
            <h1 className={isDarkMode ? 'dark-title' : 'title'}>
              Machine Learning Projects
            </h1>
            
            <h3 className={isDarkMode ? 'dark-title' : 'title'}>
              Customer Churn Prediction
            </h3>

            <p className={isDarkMode ? 'dark-content-left' : 'content-left'}>
              <ul>
                <li className="main-bullet">
                Predicting whether a customer will change telecommunications provider. The training dataset 
                contains 4250 samples. Each sample contains 19 features and 1 boolean variable "churn" which 
                indicates the class of the sample.
                  <ul className="sub-bullet">
                    <li>Logistic Regression - Accuracy: 86%</li>
                    <li>Neural Network w/ 6 Hidden Units - Accuracy: 87%</li>
                    <li>Neural Network w/ 40 Hidden Units - Accuracy: 86%</li>
                    <li>Project Link: https://gitfront.io/r/DanielChoy17/9z8EPn8Pc1Ye/Customer-Churn-Prediction/</li>
                  </ul>
                </li>
              </ul>
            </p>

            <h3 className={isDarkMode ? 'dark-title' : 'title'}>
              Classifying Images
            </h3>

            <p className={isDarkMode ? 'dark-content-left' : 'content-left'}>
              <ul>
                <li className="main-bullet">
                Used the CIFAR-10 dataset which consists of 60000 32x32 colour images in 10 classes, 
                with 6000 images per class. We used 45,000 images for training, 5,000 images for validation, 
                and 10,000 images for testing. I created 4 different Convolutional Neural Network Models to try and classify the images into their correct class.
                  <ul className="sub-bullet">
                    <li>4 Different Convolutional Neural Network Models - Best Accuracy: 70%</li>
                    <li>Project Link: https://gitfront.io/r/DanielChoy17/ZuYq9yQ1aHkY/Classifying-Images/</li>
                  </ul>
                </li>
              </ul>
            </p>

            <h3 className={isDarkMode ? 'dark-title' : 'title'}>
              Sentiment Analysis/Classification
            </h3>

            <p className={isDarkMode ? 'dark-content-left' : 'content-left'}>
              <ul>
                <li className="main-bullet">
                  Used the Yelp reviews dataset which consists of reviews from Yelp. 
                  The goal was to predict how many stars were given (1-5 stars) given the Yelp review. To accomplish this, I used a Logistic Regression Model and a BERT Pre-Trained Transformer Model.
                  <ul className="sub-bullet">
                    <li>Logistic Regression Model - Accuracy: 47%</li>
                    <li>BERT Pre-Trained Transformer Model - Accuracy: 56%</li>
                    <li>Project Link: https://gitfront.io/r/DanielChoy17/7JDdGnJ9wru6/Sentiment-Classification/</li>
                  </ul>
                </li>
              </ul>
            </p>

            <h3 className={isDarkMode ? 'dark-title' : 'title'}>
              Stock Prediction
            </h3>

            <p className={isDarkMode ? 'dark-content-left' : 'content-left'}>
              <ul>
                <li className="main-bullet">
                  Used the Yahoo Finance library in Python to obtain the data for the S&P 500. 
                  Using this data, the goal was to predict the Average Stock Price (the average of the 
                  open and close values) for a given day using a specific amount of lookback which is the number 
                  of days prior that we are going to lookback and use as data. In this project, we used 25 days for 
                  our lookback. I used a Long Short-Term Memory Recurrent Neural Network to achieve this task.
                  <ul className="sub-bullet">
                    <li>Long Short-Term Memory Recurrent Neural Network</li>
                    <li>Project Link: https://gitfront.io/r/DanielChoy17/gncTPpkdXqRT/Stock-Prediction/</li>
                  </ul>
                </li>
              </ul>
            </p>
          </div>
        </section>

        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <div className="text-container">
            <h1 className={isDarkMode ? 'dark-title' : 'title'}>
              Multi-Threaded HTTP Server (C Programming)
            </h1>

            <p className={isDarkMode ? 'dark-content-left' : 'content-left'}>
              <ul>
                <li className="main-bullet">
                  The server processes incoming HTTP requests from the client, generating responses accordingly. 
                  It uses multi-threading for improved efficiency through parallelism when managing requests. It creates, 
                  listens, and accepts connections on a specific port using a socket. The GET method retrieves specified 
                  file contents, the PUT method inserts message body contents into the specified file, and the APPEND method 
                  (made-up HTTP request) adds message body contents to the designated file.
                  <ul className="sub-bullet">
                    <li>Project Link: https://gitfront.io/r/DanielChoy17/Qw6vXnbjhTck/HTTP-Server/</li>
                  </ul>
                </li>
              </ul>
            </p>
          </div>
        </section>

        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <div className="text-container">
            <h1 className={isDarkMode ? 'dark-title' : 'title'}>
              Gym-Essentials Mobile App (Expo Framework, Node.js, React Native, Firebase, Figma)
            </h1>

            <p className={isDarkMode ? 'dark-content-left' : 'content-left'}>
              <ul>
                <li className="main-bullet">
                  An all-in-one gym app with a personal records tracker, workouts tracker, and calculators 
                  for BMI, daily caloric intake, and daily protein intake based on user input. Additionally, 
                  the app sends motivational notifications to encourage regular gym visits.
                  <ul className="sub-bullet">
                    <li>Project Link: https://gitfront.io/r/DanielChoy17/xnLPEXS2Zh8b/Gym-Essentials/</li>
                  </ul>
                </li>
              </ul>
            </p>
          </div>
        </section>

        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <div className="text-container">
            <h1 className={isDarkMode ? 'dark-title' : 'title'}>
              Job-Manager Web App (Py4web Framework, Vue.js, Python, JavaScript, HTML/CSS)
            </h1>

            <p className={isDarkMode ? 'dark-content-left' : 'content-left'}>
              <ul>
                <li className="main-bullet">
                  A web app for tracking job applications with dynamic editing, specific job app views with filters, 
                  and a field search for companies. It provides analytics like similar jobs, average sector salaries, and 
                  response rate estimates. Additionally, users can share their experiences and opinions about a company through 
                  the comment section.
                  <ul className="sub-bullet">
                    <li>Project Link: https://gitfront.io/r/DanielChoy17/nBxqSNw912PG/Job-Manager/</li>
                  </ul>
                </li>
              </ul>
            </p>
          </div>
        </section>

        <section className={isDarkMode ? 'dark-section' : 'section'}>
          <div className="text-container">
            <h1 className={isDarkMode ? 'dark-title' : 'title'}>
              Creating/Manipulating a Database (PostgreSQL + C Programming)
            </h1>

            <p className={isDarkMode ? 'dark-content-left' : 'content-left'}>
              <ul>
                <li className="main-bullet">
                  This project contains SQL scripts to generate and load database tables with data. The 
                  front-end of the database is implemented in a C file, which incorporates three C functions 
                  that utilize queries to enable seamless interaction with the database. Additionally, one of 
                  these C functions makes use of a Stored Function written in pgsql.
                  <ul className="sub-bullet">
                    <li>Project Link: https://gitfront.io/r/DanielChoy17/7L4F2uzDHjuG/Creating-Manipulating-a-Database/</li>
                  </ul>
                </li>
              </ul>
            </p>
          </div>
        </section>

        <Socials/>
      </div>
    );
};