// import dependencies
import React from "react";
import { Link } from "react-router-dom";

// import components
import { Slide } from "../components/Slide";
import { aboutMePath } from "../svgs/titles.js";

// import styles
import "../../style/sass/pages/_home.scss";

const Home = () => {
  const tileOneContent =
    "i'm a front end dev out of worcester, massachusetts. i offer a blend of programming and design sense, over 5 years of experience, and a holistic view of the web and its workings.";
  return (
    <section>
      <Slide title={aboutMePath} content={tileOneContent} />
      <Link className="projects" to="/projects">
        check out my projects
      </Link>
    </section>
  );
};

export default Home;