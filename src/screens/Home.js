import React, { useEffect } from "react";
import "./screens.css";
import { useDarkMode } from "../context/DarkModeContext";

export const Home = () => {
    const { isDarkMode } = useDarkMode();

    useEffect(() => {
      document.body.style.backgroundColor = isDarkMode ? '#000000' : '#ffffff';
    }, [isDarkMode]);


    return (
      <div>
        <h1 className={isDarkMode ? 'dark-title' : 'title'}>
          Home
        </h1>
      </div>
    );
};