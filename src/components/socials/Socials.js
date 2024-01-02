import "./Socials.css";
import { useDarkMode } from "../../context/DarkModeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import GoogleIcon from "../../assets/GoogleIcon.png";

export const Socials = () => {
    const { isDarkMode } = useDarkMode();

    return (
        <div className="social-container">
            <div className="social-icons">
                <a href="https://github.com/DanielChoy17" className={isDarkMode ? 'dark-github' : 'github'}>
                    <FontAwesomeIcon icon={faGithub} />
                </a>

                <a href="https://linkedin.com/in/daniel-choy-2705501b5" className="linkedin">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>

                <a href="mailto:danielcchoy17@gmail.com">
                    <img src={GoogleIcon} className="google" alt="Email"/>
                </a>
            </div>

            <div className="contact-info">
                <p className={isDarkMode ? 'dark-text' : 'text'}>danielcchoy17@gmail.com</p>
                <p className={isDarkMode ? 'dark-text' : 'text'}>(510) 857-6848</p>
            </div>
        </div>
    );
};
