import React, { type SVGProps } from "react";

const HumburgerMenu = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* Icon from Material Line Icons by Vjacheslav Trushkin - https://github.com/cyberalien/line-md/blob/master/license.txt */}
      <g
        fill="none"
        stroke="currentColor"
        strokeDasharray="16"
        strokeDashoffset="16"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M5 5h14">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="16;0"
          />
        </path>
        <path d="M5 12h14">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="16;0"
          />
        </path>
        <path d="M5 19h14">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.4s"
            dur="0.2s"
            values="16;0"
          />
        </path>
      </g>
    </svg>
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width="1em"
    //   height="1em"
    //   viewBox="0 0 24 24"
    //   {...props}
    // >
    //   {/* Icon from css.gg by Astrit - https://github.com/astrit/css.gg/blob/master/LICENSE */}
    //   <path
    //     fill="currentColor"
    //     d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m7-7a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"
    //   />
    // </svg>
  );
};

export default HumburgerMenu;
