// import dependencies
import React from "react";
import createIcon from "../utils/createIcon";

export const Skills = props => (
  <aside>{props.icons.map(icon => createIcon(icon))}</aside>
);
