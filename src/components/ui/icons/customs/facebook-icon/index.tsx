import React from "react";
import type { SVGProps } from "react";

const FacebookIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            width={13}
            height={20}
            viewBox="0 0 13 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
            d="M1 8v4h3v7h4v-7h3l1-4H8V6a1 1 0 0 1 1-1h3V1H9a5 5 0 0 0-5 5v2z"
            stroke="#9333ea"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            />
        </svg>
    );
};

export default FacebookIcon;