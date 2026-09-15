import React from "react";
import type { SVGProps } from "react";

const CheckBoxIcon: React.FC<SVGProps<SVGSVGElement>> = ({
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
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="4.5"
        y="0.5"
        width="7.45471"
        height="7.45471"
        rx="2.5"
        stroke={stroke}
        shapeRendering="crispEdges"
      />
    </svg>
  );
};

export default CheckBoxIcon;
