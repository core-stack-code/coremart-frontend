import React from "react";
import type { SVGProps } from "react";

const MailIcon: React.FC<SVGProps<SVGSVGElement>> = ({
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
      viewBox="0 0 13 11"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.5899 0.49585H1.51796C0.825519 0.49585 0.265267 1.05742 0.265267 1.74378L0.258972 9.23134C0.258972 9.9177 0.825519 10.4793 1.51796 10.4793H11.5899C12.2824 10.4793 12.8489 9.9177 12.8489 9.23134V1.74378C12.8489 1.05742 12.2824 0.49585 11.5899 0.49585ZM11.5899 2.9917L6.55394 6.11152L1.51796 2.9917V1.74378L6.55394 4.86359L11.5899 1.74378V2.9917Z"
        fill="#9333EA"
      />
    </svg>
  );
};

export default MailIcon;