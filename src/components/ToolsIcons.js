import React from "react";
import "../components/languages/LanguagesIcons.css";
import { useDarkMode } from "../context/DarkModeContext";

import VSCodeIcon from "../assets/toolIcons/VSCode.png";
import GithubIcon from "../assets/toolIcons/Github.png";
import GitIcon from "../assets/toolIcons/Git.png";
import AWSLammdaIcon from "../assets/toolIcons/AWSLambda.png";
import NodeJsIcon from "../assets/toolIcons/NodeJs.png";
import FirebaseIcon from "../assets/toolIcons/Firebase.png";
import VueJsIcon from "../assets/toolIcons/VueJs.png";
import ExpoIcon from "../assets/toolIcons/ExpoFramework.png";
import GDBDebuggerIcon from "../assets/toolIcons/GDBDebugger.png";
import AWSIcon from "../assets/toolIcons/AWS.png";
import GoogleColabIcon from "../assets/toolIcons/GoogleColab.png";
import JupyterIcon from "../assets/toolIcons/Jupyter.png";
import VirtualBoxIcon from "../assets/toolIcons/Virtualbox.png";
import FigmaIcon from "../assets/toolIcons/Figma.png";
import AgileScrumIcon from "../assets/toolIcons/AgileScrum.png";
import JiraIcon from "../assets/toolIcons/Jira.png";
import Py4WebIcon from "../assets/toolIcons/Py4Web.png";

const iconData = [
  { name: "Visual Studio Code", icon: VSCodeIcon },
  { name: "Github", icon: GithubIcon },
  { name: "Git", icon: GitIcon },
  { name: "AWS Lambda", icon: AWSLammdaIcon },
  { name: "nodeJs", icon: NodeJsIcon },
  { name: "Firebase", icon: FirebaseIcon},
  { name: "VueJs", icon: VueJsIcon },
  { name: "Expo Framework", icon: ExpoIcon },
  { name: "Amazon Web Services", icon: AWSIcon },
  { name: "GDB Debugger", icon: GDBDebuggerIcon },
  { name: "Google Colab", icon: GoogleColabIcon },
  { name: "Jupyter Notebook", icon: JupyterIcon },
  { name: "Virtualbox", icon: VirtualBoxIcon },
  { name: "Figma", icon: FigmaIcon },
  { name: "Agile Scrum Methodology", icon: AgileScrumIcon },
  { name: "Jira", icon: JiraIcon },
  { name: "Py4Web Framework", icon: Py4WebIcon },
];

export const ToolsList = () => {
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