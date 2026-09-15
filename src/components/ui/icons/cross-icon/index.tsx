import React from "react";
import type { SVGProps } from "react";

const CrossIcon: React.FC<SVGProps<SVGSVGElement>> = ({
  width = 24,
  height = 24,
  fill = "none",
  stroke = "#9333EA",
  ...props
}) => {
  return (
    <svg
        width={width}
        height={height}
        viewBox="0 0 10 10"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M10 1.00714L8.99286 0L5 3.99286L1.00714 0L0 1.00714L3.99286 5L0 8.99286L1.00714 10L5 6.00714L8.99286 10L10 8.99286L6.00714 5L10 1.00714Z"
            fill="#EF4444"
        />
    </svg>
  );
};

export default CrossIcon;
