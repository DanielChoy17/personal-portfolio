import React from "react";
import "./LanguagesIcons.css";
import { useDarkMode } from "../../context/DarkModeContext";

import PythonIcon from "../../assets/langIcons/Python.png";
import CIcon from "../../assets/langIcons/C.png";
import CPlusPlusIcon from "../../assets/langIcons/CPlusPlus.png";
import GoIcon from "../../assets/langIcons/Go.png";
import JavaScriptIcon from "../../assets/langIcons/JavaScript.png";
import ReactNativeIcon from "../../assets/langIcons/ReactNative.png";
import PostgreSQLIcon from "../../assets/langIcons/PostgreSQL.png";
import HTMLIcon from "../../assets/langIcons/HTML.png";
import CSSIcon from "../../assets/langIcons/CSS.png";
import JavaIcon from "../../assets/langIcons/Java.png";
import HaskellIcon from  "../../assets/langIcons/Haskell.png";
import MIPSAssembly from "../../assets/langIcons/MIPS.png";

const iconData = [
  { name: "Python", icon: PythonIcon },
  { name: "C Programming", icon: CIcon },
  { name: "C++", icon: CPlusPlusIcon },
  { name: "Golang", icon: GoIcon },
  { name: "JavaScript", icon: JavaScriptIcon },
  { name: "React Native", icon: ReactNativeIcon },
  { name: "PostgreSQL", icon: PostgreSQLIcon },
  { name: "HTML", icon: HTMLIcon },
  { name: "CSS", icon: CSSIcon },
  { name: "Java", icon: JavaIcon },
  { name: "Haskell", icon: HaskellIcon },
  { name: "MIPS Assembly", icon: MIPSAssembly },
];

export const LanguagesList = () => {
  const { isDarkMode } = useDarkMode();

  const rows = [];
  const iconsPerRow = 4;

  for (let i = 0; i < iconData.length; i += iconsPerRow) {
    const rowIcons = iconData.slice(i, i + iconsPerRow);
    const row = (
      <div key={i} className="icon-row">
        {rowIcons.map((icon, index) => (
          <div key={index} className={isDarkMode ? 'dark-icon-item' : 'icon-item'}>
            <img src={icon.icon} className= 'icon-image' alt={icon.name}/>
            <p>{icon.name}</p>
          </div>
        ))}
      </div>
    );
    rows.push(row);
  }

  return <div>{rows}</div>;
};