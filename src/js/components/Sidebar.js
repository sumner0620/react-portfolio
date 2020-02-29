import React from "react";
import { Skills } from "./Skills.js";
import "../../style/sass/modules/_sidebar.scss";

export function Sidebar(props) {
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
        <Skills />
      </aside>
      <nav className="flex row jfsa" id="social">
        <a href={props.github} target="_blank">
          <i className="fab fa-github"></i>
        </a>
        <a href={props.linkedin} target="_blank">
          <i className="fab fa-linkedin"></i>
        </a>
      </nav>
    </header>
  );
}
Sidebar.defaultProps = {
  title: "ds.",
  location: "Worcester, MA",
  phone: "774-200-4059",
  email: "jdsumner0620@gmail.com",
  github: "https://github.com/dpsumner1289/",
  linkedin: "https://www.linkedin.com/in/douglas-sumner"
};
