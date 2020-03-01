// import dependencies
import React from "react";

// import components
import { Slide } from "../components/Slide";

// import styles
import "../../style/sass/pages/_home.scss";

export const Testimonials = () => {
  const content =
    "i'm a front end dev out of Worcester, MA. i offer a blend of left and right brain, 5 years of experience, and a holistic view of the web and its makeup.";
  return (
    <section>
      <Slide title="what people say." content={content} />
    </section>
  );
};
