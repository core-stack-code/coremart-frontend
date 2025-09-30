import React from "react";
import type { SVGProps } from "react";

const CategoriesIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.375 11.25 11.25 0l6.875 11.25zM18.125 25q-2.343 0-3.984-1.64-1.64-1.64-1.641-3.985 0-2.344 1.641-3.984 1.643-1.639 3.984-1.641t3.985 1.641 1.64 3.984-1.64 3.985T18.125 25M0 24.375v-10h10v10zM18.125 22.5q1.313 0 2.219-.906t.906-2.219-.906-2.219-2.219-.906-2.219.906T15 19.375t.906 2.219 2.219.906M2.5 21.875h5v-5h-5zM8.813 8.75h4.874L11.25 4.813z"
        fill="#9333EA"
      />
    </svg>
  );
};

export default CategoriesIcon;
