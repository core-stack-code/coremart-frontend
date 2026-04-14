import React from "react";
import type { SVGProps } from "react";

const StarIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={20}
      height={19}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.849 1.22c-.684-1.626-3.014-1.626-3.698 0L6.397 5.387l-4.552.361C.07 5.888-.65 8.079.703 9.225l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L10 16.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36z"
        fill="#7800CE"
      />
    </svg>
  );
};

export default StarIcon;
