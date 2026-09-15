import React from "react";
import type { SVGProps } from "react";

const NotificationIcon: React.FC<SVGProps<SVGSVGElement>> = ({
  width = 18,
  height = 22,
  fill = "none",
  stroke = "currentColor",
  ...props
}) => {
  return (
    <svg 
      width={width}
      height={height}
      viewBox="0 0 18 22"
      fill={fill}
      stroke={stroke}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 22C10.2375 22 11.25 20.9846 11.25 19.7436H6.75C6.75 20.9846 7.75125 22 9 22ZM15.75 15.2308V9.58974C15.75 6.12615 13.905 3.22667 10.6875 2.45949V1.69231C10.6875 0.755897 9.93375 0 9 0C8.06625 0 7.3125 0.755897 7.3125 1.69231V2.45949C4.08375 3.22667 2.25 6.11487 2.25 9.58974V15.2308L0 17.4872V18.6154H18V17.4872L15.75 15.2308Z"
        fill="#6B7280"
      />
      <path
        d="M13.5 6C14.8807 6 16 4.88071 16 3.5C16 2.11929 14.8807 1 13.5 1C12.1193 1 11 2.11929 11 3.5C11 4.88071 12.1193 6 13.5 6Z"
        fill="#6366F1"
      />
    </svg>
  );
};

export default NotificationIcon;