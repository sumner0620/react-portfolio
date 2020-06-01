// import dependencies
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faPhp,
  faCss3Alt,
  faSass,
  faHtml5,
  faGitAlt,
  faWordpressSimple,
  faNpm,
  faYarn,
  faGulp,
  faGrunt,
  faAdobe,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

// import components
import { Skills } from "./Skills.js";

// importn styles
import "../../style/sass/partials/_animations.scss";
import "../../style/sass/modules/_sidebar.scss";

// import utils
import { startTime, ampm } from "../utils/startTime.js";

export const Sidebar = props => {
  const icons = [
    faJs,
    faReact,
    faPhp,
    faCss3Alt,
    faSass,
    faHtml5,
    faGitAlt,
    faWordpressSimple,
    faNpm,
    faYarn,
    faGulp,
    faGrunt,
    faAdobe
  ];
  useEffect(() => {
    // startTime();
    // ampm();
  });
  return (
    <header className="main-header flex col container afs jfs">
      <aside id="title">
        <h1>{props.title}</h1>
      </aside>
      <aside className="flex col" id="contact">
        <div className="flex row afe jfsb">
          {props.location}
          {/* <div id="clock">
            <span id="hour"></span>
            <span id="blinker">:</span>
            <span id="minute"></span>
          </div> */}
        </div>
        <div>{props.phone}</div>
        <div>{props.email}</div>
      </aside>
      <aside className="flex row" id="skillset">
        <Skills icons={icons} />
      </aside>
      <nav className="flex row jfsa" id="social">
        <a href={props.github} target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href={props.linkedin} target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </nav>
    </header>
  );
};
Sidebar.defaultProps = {
  title: "ds.",
  location: "worcester, ma",
  phone: "774-200-4059",
  email: "jdsumner0620@gmail.com",
  github: "https://github.com/dpsumner1289/",
  linkedin: "https://www.linkedin.com/in/douglas-sumner"
};
