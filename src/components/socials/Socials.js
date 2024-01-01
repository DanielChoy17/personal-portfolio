import "./Socials.css";
import { useDarkMode } from "../../context/DarkModeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import GoogleIcon from "../../assets/GoogleIcon.png";

export const Socials = () => {
    const { isDarkMode } = useDarkMode();

    return (
        <div className="social-icons">
            <a href="https://github.com/DanielChoy17" className={isDarkMode ? 'dark-github' : 'github'}>
                <FontAwesomeIcon icon={faGithub} />
            </a>

            <a href="https://linkedin.com/in/daniel-choy-2705501b5" className="linkedin">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a href="mailto:danielcchoy17@gmail.com">
                <img src={GoogleIcon} className="google"/>
            </a>
        </div>
    );
};
