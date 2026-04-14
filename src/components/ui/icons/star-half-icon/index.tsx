import React from "react";
import type { SVGProps } from "react";

const StarHalfIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={11}
      height={19}
      viewBox="0 0 11 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 1.024v-.005c0-.053.002-.353-.217-.632A1.01 1.01 0 0 0 9.607.072c-.192.076-.315.193-.35.225-.052.05-.094.1-.122.134a4 4 0 0 0-.31.457c-.207.343-.484.84-.773 1.375a169 169 0 0 0-1.606 3.074h-.002l-4.599.367C.07 5.844-.65 8.043.702 9.192L4.17 12.14l-1.06 4.406c-.412 1.72 1.472 3.078 2.992 2.157l3.94-2.388c.592-.359.958-.996.958-1.692z"
        fill="7800CE"
      />
    </svg>
  );
};

export default StarHalfIcon;
