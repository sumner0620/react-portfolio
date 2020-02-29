import React from "react";
import { Sidebar } from "./Sidebar.js";
import { Slide } from "./Slide.js";
import "../../style/sass/partials/_normalize.scss";
import "../../style/sass/partials/_base.scss";
import "../../style/sass/partials/_mixins.scss";
import "../../style/sass/partials/_flex.scss";

export function Main() {
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
  const tileOneContent =
    "i'm a front end dev out of Worcester, MA. i offer a blend of left and right brain, 5 years of experience, and a holistic view of the web and its makeup.";
  const tileTwoContent =
    "i've worked on both large and small projects, from start to finish. here's a few examples of my projects:";

  return (
    <main>
      <Sidebar />
      <Slide title="about me." tiles={tiles} content={tileOneContent} />
      <Slide title="work." tiles={tiles} content={tileTwoContent} />
    </main>
  );
}
