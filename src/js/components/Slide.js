// import dependencies
import React, { useState } from "react";

// import styles
import "../../style/sass/modules/_slide.scss";

export const Slide = props => {
  let tileMarkup;
  if (props.tiles) {
    tileMarkup = (
      <aside className="flex row work">
        {props.tiles.map(tile => {
          return (
            <aside className="flex col item_1_2 work-tile">
              <h3>{tile.title}</h3>
              <p>{tile.description}</p>
              <figure>
                <img src={tile.image} />
              </figure>
            </aside>
          );
        })}
      </aside>
    );
  } else {
    tileMarkup = "";
  }
  return (
    <section className="slide flex col container afs jfs">
      <header className="title">
        <h2>{props.title}</h2>
        <article className="flex col">{props.content}</article>
      </header>
      {tileMarkup}
    </section>
  );
};
