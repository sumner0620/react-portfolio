import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const createIcon = iconID => {
  return <FontAwesomeIcon key={iconID.iconName} icon={iconID} />;
};

export default createIcon;
