import React from "react";
import type { SVGProps } from "react";

const StockIcon: React.FC<SVGProps<SVGSVGElement>> = ({
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
            viewBox="0 0 24 24"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
            strokeLinecap="round"
            strokeLinejoin="round"

            {...props}
        >
            <path
                d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z"
                fill="#ffffff"
                stroke="#10B981"
            />

            <path
                d="M12 12L20 7.5"
                fill="#ffffff"
                stroke="#10B981"
            />

            <path
                d="M12 12V21"
                fill="#ffffff"
                stroke="#10B981"
            />

            <path
                d="M12 12L4 7.5"
                fill="#ffffff"
                stroke="#10B981"
            />

            <path
                d="M16 5.25L8 9.75"
                fill="#ffffff"
                stroke="#10B981"
            />

        </svg>
    );
};

export default StockIcon