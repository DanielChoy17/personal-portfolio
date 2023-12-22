import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import "./NavBar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar() {
  const [click, setClick] = useState(true);
  const [isDarkMode, setDarkMode] = useState(false);

  const handleClick = () => setClick(!click);
  const toggleDarkMode = () => setDarkMode(!isDarkMode);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span>Daniel's Portfolio</span>
            <span className="icon">
              <CodeIcon />
            </span>
          </NavLink>

          <div className="mode-button" onClick={toggleDarkMode}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </div>

          <ul className={click ? "nav-menu" : "nav-menu active"}>          
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/experience"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Experience
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/projects"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Projects
              </NavLink>
            </li>
          </ul>
            
          <div className="nav-icon" onClick={handleClick}>
              {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}
              {click ? (
                <span className="icon">
                  <HamburgetMenuOpen />{" "}
                </span>
              ) : (
                <span className="icon">
                  <HamburgetMenuClose />
                </span>
              )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
