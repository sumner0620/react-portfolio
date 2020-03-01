// import dependencies
import React from "react";
import { Link } from "react-router-dom";

// import components
import { Slide } from "../components/Slide";

// import styles
import "../../style/sass/pages/_home.scss";

export const Home = () => {
  const tileOneContent =
    "i'm a front end dev out of Worcester, MA. i offer a blend of left and right brain, 5 years of experience, and a holistic view of the web and its makeup.";
  return (
    <section>
      <Slide title="about me." content={tileOneContent} />
      <Link className="projects" to="/projects">
        check out my projects
      </Link>
    </section>
  );
};
