import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faPhp,
  faCss3Alt,
  faSass,
  faHtml5,
  faGitAlt,
  faWordpressSimple,
  faNpm,
  faYarn,
  faGulp,
  faGrunt,
  faAdobe
} from "@fortawesome/free-brands-svg-icons";

const createIcon = iconID => {
  return <FontAwesomeIcon key={iconID.iconName} icon={iconID} />;
};

export default createIcon;
