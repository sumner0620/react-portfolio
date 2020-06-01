import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

const AnimFeTurbulence = animated("feTurbulence");
const AnimFeDisplacementMap = animated("feDisplacementMap");

const PageHeading = ({ title }) => {
  const [open, toggle] = useState(false);
  const { freq, scale, transform, opacity } = useSpring({
    reverse: open,
    from: {
      scale: 10,
      opacity: 0,
      transform: "scale(0.9)",
      freq: "0.0175, 0.0"
    },
    to: { scale: 150, opacity: 1, transform: "scale(1)", freq: "0.0, 0.0" },
    config: { duration: 3000 }
  });
  return (
    <h2>
      <animated.svg style={{ transform, opacity }} viewBox="0 0 1278 446">
        <defs>
          <filter id="water">
            <AnimFeTurbulence
              type="fractalNoise"
              baseFrequency={freq}
              numOctaves="1.5"
              result="TURB"
              seed="8"
            />
            <AnimFeDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              in="SourceGraphic"
              in2="TURB"
              result="DISP"
              scale={scale}
            />
          </filter>
        </defs>
        <g filter="url(#water)">
          <animated.path d={title} fill="#f0f0f0" />
        </g>
      </animated.svg>
    </h2>
  );
};

export default PageHeading;
