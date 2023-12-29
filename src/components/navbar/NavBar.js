import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import "./NavBar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import { useDarkMode } from "../../context/DarkModeContext";

function NavBar() {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  const { isDarkMode, toggleDarkMode } = useDarkMode();
  
  return (
    <>
      <nav className={isDarkMode ? 'dark-navbar' : 'navbar'}>
        <div className={isDarkMode ? 'dark-nav-container' : 'nav-container'}>
          <NavLink exact to="/" className={isDarkMode ? 'dark-nav-logo' : 'nav-logo'}>
            <span>Daniel's Portfolio</span>
            <span className={isDarkMode ? 'dark-icon' : 'icon'}>
              <CodeIcon />
            </span>
          </NavLink>

          <ul className={`${isDarkMode ? 'dark-' : ''}${click ? 'nav-menu' : 'nav-menu active'}`}>         
            <li className={isDarkMode ? 'dark-nav-item' : 'nav-item'}>
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className={isDarkMode ? 'dark-nav-links' : 'nav-links'}
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>

            <li className={isDarkMode ? 'dark-nav-item' : 'nav-item'}>
              <NavLink
                exact
                to="/experience"
                activeClassName="active"
                className={isDarkMode ? 'dark-nav-links' : 'nav-links'}
                onClick={handleClick}
              >
                Experience
              </NavLink>
            </li>

            <li className={isDarkMode ? 'dark-nav-item' : 'nav-item'}>
              <NavLink
                exact
                to="/projects"
                activeClassName="active"
                className={isDarkMode ? 'dark-nav-links' : 'nav-links'}
                onClick={handleClick}
              >
                Projects
              </NavLink>
            </li>

            <li className={isDarkMode ? 'dark-nav-item' : 'nav-item'}>
              <NavLink
                exact
                to="/certifications"
                activeClassName="active"
                className={isDarkMode ? 'dark-nav-links' : 'nav-links'}
                onClick={handleClick}
              >
                Certifications
              </NavLink>
            </li>

            <li className={isDarkMode ? 'dark-nav-item' : 'nav-item'}>
              <NavLink
                exact
                to="/funwithapis"
                activeClassName="active"
                className={isDarkMode ? 'dark-nav-links' : 'nav-links'}
                onClick={handleClick}
              >
                Fun w/ APIs
              </NavLink>
            </li>
          </ul>

          <div className={isDarkMode ? 'dark-nav-icon' : 'nav-icon'} onClick={handleClick}>
              {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}
              {click ? (
                <span className={isDarkMode ? 'dark-icon' : 'icon'}>
                  <HamburgetMenuOpen />{" "}
                </span>
              ) : (
                <span className={isDarkMode ? 'dark-icon' : 'icon'}>
                  <HamburgetMenuClose />
                </span>
              )}
          </div>

          <div className={isDarkMode ? 'dark-mode-button' : 'mode-button'} onClick={toggleDarkMode}>
            {isDarkMode ? <FaMoon /> : <FaSun />}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
