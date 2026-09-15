import React from "react";
import type { SVGProps } from "react";

const StarOutlineIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
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
        d="M8.611 1.414c.513-1.218 2.264-1.218 2.777 0l1.754 4.169.118.28.303.024 4.552.36c1.34.107 1.863 1.746.859 2.597l-3.468 2.939-.236.199.073.3 1.06 4.39c.295 1.227-1.01 2.236-2.14 1.664l-.108-.06-3.896-2.354-.259-.156-.259.156-3.896 2.353c-1.154.697-2.553-.338-2.248-1.604l1.06-4.392.072-.299-.235-.2-3.468-2.937c-1.005-.851-.481-2.49.858-2.596l4.553-.362.302-.023.118-.281z"
        stroke="#E0E0E0"
      />
    </svg>
  );
};

export default StarOutlineIcon;
