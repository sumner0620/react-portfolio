// import dependencies
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

// import styles
import "../../style/sass/components/_quote.scss";

export const Quote = ({ content }) => {
  return (
    <article className="quote">
      <figure>
        <FontAwesomeIcon icon={faQuoteRight} />
      </figure>
      <blockquote>{content}</blockquote>
    </article>
  );
};
