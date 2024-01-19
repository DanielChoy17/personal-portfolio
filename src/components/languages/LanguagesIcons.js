import React from "react";
import "./LanguagesIcons.css";
import PythonIcon from "../../assets/Python.png";

const iconData = [
  { name: "Python", icon: PythonIcon },
];

export const LanguagesList = () => {
  const rows = [];
  const iconsPerRow = 5;

  for (let i = 0; i < iconData.length; i += iconsPerRow) {
    const rowIcons = iconData.slice(i, i + iconsPerRow);
    const row = (
      <div key={i} className="icon-row">
        {rowIcons.map((icon, index) => (
          <div key={index} className="icon-item">
            <img src={icon.icon} className={icon.name} alt="Python"/>
            <p>{icon.name}</p>
          </div>
        ))}
      </div>
    );
    rows.push(row);
  }

  return <div>{rows}</div>;
};