import React from "react";
import type { SVGProps } from "react";

const HeadphoneIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={40}
      height={48}
      viewBox="0 0 40 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.5 27.208v-6.875a18.333 18.333 0 0 1 36.667 0v6.875m-4.583 11.459c0 3.797-6.156 6.874-13.75 6.874"
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.5 27.208a4.584 4.584 0 0 1 4.583-4.583h2.292a4.583 4.583 0 0 1 4.583 4.583v6.875a4.583 4.583 0 0 1-4.583 4.584H6.083A4.583 4.583 0 0 1 1.5 34.083zm25.209 0a4.584 4.584 0 0 1 4.583-4.583h2.291a4.583 4.583 0 0 1 4.584 4.583v6.875a4.583 4.583 0 0 1-4.584 4.584h-2.291a4.584 4.584 0 0 1-4.584-4.584z"
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HeadphoneIcon;
