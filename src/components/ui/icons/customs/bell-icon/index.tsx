import React from "react";

const BellIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
    width={18}
    height={22}
    viewBox="0 0 18 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 22a2.26 2.26 0 0 0 2.25-2.256h-4.5A2.253 2.253 0 0 0 9 22m6.75-6.77V9.59c0-3.464-1.845-6.363-5.062-7.13v-.768a1.688 1.688 0 1 0-3.376 0v.767C4.085 3.227 2.25 6.115 2.25 9.59v5.642L0 17.487v1.128h18v-1.128z"
      fill="currentColor"
    />
  </svg>
  );
};

export default BellIcon;
