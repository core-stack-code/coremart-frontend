import React from "react";

const ProfileIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#a)"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11.18 9.894a5.147 5.147 0 1 0 10.295 0 5.147 5.147 0 0 0-10.294 0M8.607 27.91v-2.573a5.147 5.147 0 0 1 5.148-5.148h5.148a5.15 5.15 0 0 1 5.147 5.148v2.574" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.886.886h30.886v30.886H.886z" />
      </clipPath>
    </defs>
  </svg>
  );
};

export default ProfileIcon  ;
