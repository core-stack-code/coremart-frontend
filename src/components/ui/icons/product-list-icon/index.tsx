import React from "react";
import type { SVGProps } from "react";

const productListIcon: React.FC<SVGProps<SVGSVGElement>> = ({
    width = 25,
    height = 28,
    fill = "none",
    stroke = "#9333EA",
    ...props
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 25 28"
            stroke={stroke}
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path
                d="M1 3.5C1 2.39333 1.89333 1.5 3 1.5C4.10667 1.5 5 2.39333 5 3.5C5 4.60667 4.10667 5.5 3 5.5C1.89333 5.5 1 4.60667 1 3.5Z"
                fill="#ffffff"
                stroke={stroke}
            />

            <path
                d="M1 13.5C1 12.3933 1.89333 11.5 3 11.5C4.10667 11.5 5 12.3933 5 13.5C5 14.6067 4.10667 15.5 3 15.5C1.89333 15.5 1 14.6067 1 13.5Z"
                fill="#ffffff"
                stroke={stroke}
            />

            <path
                d="M1 23.5C1 22.3933 1.89333 21.5 3 21.5C4.10667 21.5 5 22.3933 5 23.5C5 24.6067 4.10667 25.5 3 25.5C1.89333 25.5 1 24.6067 1 23.5Z"
                fill="#ffffff"
                stroke={stroke}
            />

            <path
                d="M9 3.5C9 2.39333 9.91364 1.5 11.0455 1.5H21.9545C23.0864 1.5 24 2.39333 24 3.5C24 4.60667 23.0864 5.5 21.9545 5.5H11.0455C9.91364 5.5 9 4.60667 9 3.5Z"
                fill="#ffffff"
                stroke={stroke}
            />

            <path
                d="M9 13.5C9 12.3933 9.91364 11.5 11.0455 11.5H21.9545C23.0864 11.5 24 12.3933 24 13.5C24 14.6067 23.0864 15.5 21.9545 15.5H11.0455C9.91364 15.5 9 14.6067 9 13.5Z"
                fill="#ffffff"
                stroke={stroke}
            />
            <path
                d="M9 23.5C9 22.3933 9.91364 21.5 11.0455 21.5H21.9545C23.0864 21.5 24 22.3933 24 23.5C24 24.6067 23.0864 25.5 21.9545 25.5H11.0455C9.91364 25.5 9 24.6067 9 23.5Z"
                fill="#ffffff"
                stroke={stroke}
            />


        </svg>
    );
};

export default productListIcon