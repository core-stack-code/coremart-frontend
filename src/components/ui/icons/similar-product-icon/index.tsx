import React from "react";
import type { SVGProps } from "react";

const SimilarProductIcon: React.FC<SVGProps<SVGSVGElement>> = ({
    width = 29,
    height = 29,
    fill = "none",
    stroke = "#9333EA",
    ...props
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 29 29"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            {...props}
        >
            <path
               d="M7.25 24.1665V26.5832M21.75 24.1665V26.5832M3.625 19.3332H14.5M14.5 24.1665V2.4165M10.875 12.0832V9.6665M18.125 14.4998V12.0832M3.625 16.9165V9.6665C3.625 6.24934 3.625 4.53955 4.74875 3.47863C5.8725 2.41771 7.68258 2.4165 11.3015 2.4165H17.6985C21.3174 2.4165 23.1263 2.4165 24.2513 3.47863C25.375 4.53955 25.375 6.24934 25.375 9.6665V16.9165C25.375 20.3337 25.375 22.0435 24.2513 23.1044C23.1275 24.1653 21.3174 24.1665 17.6985 24.1665H11.3015C7.68258 24.1665 5.87371 24.1665 4.74875 23.1044C3.625 22.0435 3.625 20.3337 3.625 16.9165Z"
               fill="#ffffff"
                stroke="#9333EA"
            />

        </svg>
    );
};

export default SimilarProductIcon