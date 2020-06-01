// import dependencies
import React from "react";

// import components
import { Slide } from "../components/Slide";
import { Quote } from "../components/Quote";
import { responsePath } from "../svgs/titles.js"

// import styles
import "../../style/sass/pages/_testimonials.scss";

const Testimonials = () => {
  const content = "here's what people think about me:";
  const ianQuote =
    "Doug’s passion for learning and honing his craft is one of his most valuable attributes.  He responds well to feedback and critique, always incorporating it into future work and improving his process.";
  const ianQuote2 =
    "One key advantage Doug brings to the table is his sense of aesthetic. It can be difficult to find a developer that is not only concerned with the backend functionality of their work, but also with the user experience.";
  const ianQuote3 =
    "If you are looking for a hardworking, self motivated, disciplined employee that’s dedicated to improving his craft, then Doug is your guy.";
  const quotes = [
    <Quote content={ianQuote} />,
    <Quote content={ianQuote2} />,
    <Quote content={ianQuote3} />
  ];
  return (
    <section>
      <Slide title={responsePath} content={content} testimonials={quotes} />
    </section>
  );
};

export default Testimonials