// import React, { type SVGProps } from "react";

// const CloudBackup = (props: SVGProps<SVGSVGElement>) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="1em"
//       height="1em"
//       viewBox="0 0 24 24"
//       {...props}
//     >
//       {/* Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE */}
//       <path
//         fill="currentColor"
//         d="M12 18.5c0 .5.07 1 .18 1.5H6.5c-1.5 0-2.81-.5-3.89-1.57C1.54 17.38 1 16.09 1 14.58q0-1.95 1.17-3.48C3.34 9.57 4 9.43 5.25 9.15c.42-1.53 1.25-2.77 2.5-3.72S10.42 4 12 4c1.95 0 3.6.68 4.96 2.04S19 9.05 19 11c1.15.13 2.1.63 2.86 1.5c.24.26.43.55.6.86A6.37 6.37 0 0 0 18.5 12a6.5 6.5 0 0 0-6.5 6.5m6-4c-2.21 0-4 1.79-4 4s1.79 4 4 4c1.68 0 3.12-1.03 3.71-2.5H20a2.5 2.5 0 1 1-.23-3.27L18 18.5h4v-4l-1.17 1.17A4 4 0 0 0 18 14.5"
//       />
//     </svg>
//   );
// };

// export default CloudBackup;
import React, { type SVGProps } from "react";

const CloudBackup = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* Icon from Material Line Icons by Vjacheslav Trushkin - https://github.com/cyberalien/line-md/blob/master/license.txt */}
      <mask id="lineMdCloudAltDownloadFilled0">
        <g
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path
            strokeDasharray="64"
            strokeDashoffset="64"
            d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.6s"
              values="64;0"
            />
            <set fill="freeze" attributeName="opacity" begin="0.7s" to="0" />
          </path>
          <g fill="#fff" stroke="none" opacity="0">
            <circle cx="12" cy="10" r="6" />
            <rect width="9" height="8" x="8" y="12" />
            <rect width="15" height="12" x="1" y="8" rx="6" />
            <rect width="13" height="10" x="10" y="10" rx="5" />
            <set fill="freeze" attributeName="opacity" begin="0.7s" to="1" />
          </g>
          <g fill="#000" fillOpacity="0" stroke="none">
            <circle cx="12" cy="10" r="4" />
            <rect width="9" height="6" x="8" y="12" />
            <rect width="11" height="8" x="3" y="10" rx="4" />
            <rect width="9" height="6" x="12" y="12" rx="3" />
            <set
              fill="freeze"
              attributeName="fill-opacity"
              begin="0.7s"
              to="1"
            />
            <animate
              fill="freeze"
              attributeName="opacity"
              begin="0.7s"
              dur="0.5s"
              values="1;0"
            />
          </g>
          <g fill="#000" stroke="none">
            <path d="M10 9h4v0h-4z">
              <animate
                fill="freeze"
                attributeName="d"
                begin="1.3s"
                dur="0.2s"
                values="M10 9h4v0h-4z;M10 9h4v5h-4z"
              />
            </path>
            <path d="M7 13h10l-5 0z">
              <animate
                fill="freeze"
                attributeName="d"
                begin="1.5s"
                dur="0.1s"
                values="M7 13h10l-5 0z;M7 13h10l-5 5z"
              />
            </path>
          </g>
        </g>
      </mask>
      <rect
        width="24"
        height="24"
        fill="currentColor"
        mask="url(#lineMdCloudAltDownloadFilled0)"
      />
    </svg>
  );
};

export default CloudBackup;
