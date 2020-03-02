import React from "react";
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
import { Skills } from "./Skills.js";
import "../../style/sass/modules/_sidebar.scss";

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
  return (
    <header className="main-header flex col container afs jfs">
      <aside id="title">
        <h1>{props.title}</h1>
      </aside>
      <aside className="flex col" id="contact">
        <div>{props.location}</div>
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
  location: "Worcester, MA",
  phone: "774-200-4059",
  email: "jdsumner0620@gmail.com",
  github: "https://github.com/dpsumner1289/",
  linkedin: "https://www.linkedin.com/in/douglas-sumner"
};
