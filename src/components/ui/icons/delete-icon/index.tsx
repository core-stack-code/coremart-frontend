import React from "react";
import type { SVGProps } from "react";

const DeleteIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.077 4.003a1.083 1.083 0 0 1 1.17.99l.92 11.102a2.167 2.167 0 0 0 2.159 1.988h6.848a2.167 2.167 0 0 0 2.16-1.988l.92-11.102a1.083 1.083 0 0 1 2.16.18l-.922 11.101a4.333 4.333 0 0 1-4.317 3.976H6.328a4.333 4.333 0 0 1-4.32-3.976l-.92-11.1a1.083 1.083 0 0 1 .99-1.17"
        fill="#EF4444"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 5.083A1.083 1.083 0 0 1 1.083 4h17.334a1.083 1.083 0 0 1 0 2.167H1.083A1.083 1.083 0 0 1 0 5.083M7.583 7.25a1.083 1.083 0 0 1 1.084 1.083v6.5a1.083 1.083 0 1 1-2.167 0v-6.5A1.083 1.083 0 0 1 7.583 7.25m4.334 0A1.083 1.083 0 0 1 13 8.333v4.334a1.083 1.083 0 1 1-2.167 0V8.333a1.084 1.084 0 0 1 1.084-1.083"
        fill="#EF4444"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.061 2.917a1.08 1.08 0 0 0-1.027.74l-.59 1.769A1.084 1.084 0 0 1 4.39 4.74l.589-1.77A3.25 3.25 0 0 1 8.061.75h3.377a3.25 3.25 0 0 1 3.083 2.222l.59 1.769a1.085 1.085 0 0 1-1.513 1.311 1.08 1.08 0 0 1-.543-.626l-.589-1.768a1.08 1.08 0 0 0-1.026-.741z"
        fill="#EF4444"
      />
    </svg>
  );
};

export default DeleteIcon;
