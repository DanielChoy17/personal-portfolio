import React from "react";
import "../components/languages/LanguagesIcons.css";
import { useDarkMode } from "../context/DarkModeContext";

import DjangoIcon from "../assets/frameworkIcons/Django.png";
import VueJsIcon from "../assets/frameworkIcons/VueJs.png";
import ExpoIcon from "../assets/frameworkIcons/ExpoFramework.png";
import ReactNativeIcon from "../assets/frameworkIcons/ReactNative.png";
import LaravelIcon from "../assets/frameworkIcons/Laravel.png";
import YiiIcon from "../assets/frameworkIcons/Yii.png";
import Py4WebIcon from "../assets/frameworkIcons/Py4Web.png";

const iconData = [
    { name: "Django", icon: DjangoIcon },
    { name: "Vue.js", icon: VueJsIcon },
    { name: "Expo Framework", icon: ExpoIcon },
    { name: "React Native", icon: ReactNativeIcon },
    { name: "Laravel", icon: LaravelIcon },
    { name: "Yii", icon: YiiIcon },
    { name: "Py4Web Framework", icon: Py4WebIcon },
];

export const FrameworksList = () => {
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