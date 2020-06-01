// import dependencies
import React from "react";

// import components
import { Slide } from "../components/Slide";
import { workPath } from "../svgs/titles.js"

const Projects = () => {
  const tiles = [
    {
      title: "Opioid Action Center",
      description:
        "worked with a top design agency to help this health security company come up with a way to help combat the opioid crisis",
      image: "https://douglassumner.com/assets/images/opioidactioncenter.png"
    },
    {
      title: "Caelynx Engineering",
      description:
        "along with build/create studios, worked to create a vibrant, resource-rich online presence with highly user friendly admin capabilities for Caelynx, a national engineering firm",
      image: "https://douglassumner.com/assets/images/caelynx.png"
    },
    {
      title: "University of Michigan - Impact",
      description:
        "worked with the University of Michigan and build/create studios to develop a beautiful online resource center, focused on maximizing private support for the University and its various coexisting organizations",
      image: "https://douglassumner.com/assets/images/leadersandbestimpact.png"
    },
    {
      title: "In Good Company Detroit",
      description:
        "worked to empower startups and entrepreneurs with this modern, sharp looking website, built with the good folks at build/create studios",
      image: "https://douglassumner.com/assets/images/ingoodcodetroit.png"
    }
  ];
  const tileTwoContent =
    "i've worked on both large and small projects, from start to finish. here's a few examples of my projects:";
  return <Slide title={workPath} tiles={tiles} content={tileTwoContent} />;
};

export default Projects