import React from "react";
import type { SVGProps } from "react";

const SearchIcon: React.FC<SVGProps<SVGSVGElement>> = ({
    width = 19,
    height = 18,
    fill = "none",
    stroke = "currentColor",
    ...props
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 19 18"
            fill={fill}
            stroke={stroke}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M8.59149 14.2545C12.443 14.2545 15.5653 11.3023 15.5653 7.66058C15.5653 4.01885 12.443 1.06665 8.59149 1.06665C4.73996 1.06665 1.61768 4.01885 1.61768 7.66058C1.61768 11.3023 4.73996 14.2545 8.59149 14.2545Z"
                fill="#6B7280"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
            <path
                d="M17.6177 16.1777L13.8198 12.5923"
                fill="#6B7280"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>
    );
};

export default SearchIcon;