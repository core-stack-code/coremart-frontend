import React from "react";
import type { SVGProps } from "react";

const DetailsSpecificationIcon: React.FC<SVGProps<SVGSVGElement>> = ({
    width = 30,
    height = 30,
    fill = "none",
    stroke = "#9333EA",
    ...props
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 30 30"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path
                d="M18.75 5.625L13.75 10.625L8.75 12.5L6.875 14.375L15.625 23.125L17.5 21.25L19.375 16.25L24.375 11.25"
                fill="#ffffff"
                stroke="#9333EA"
            />

            <path
                d="M11.25 18.75L5.625 24.375"
                stroke="#9333EA"
            />

            <path
                d="M18.125 5L25 11.875"
                stroke="#9333EA"
            />

        </svg>
    );
};

export default DetailsSpecificationIcon