import React from "react";
import type { SVGProps } from "react";

const PurchaseDiscountIcon: React.FC<SVGProps<SVGSVGElement>> = ({
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
                d="M12.5003 21H8.57429C7.85769 21 7.16477 20.7434 6.62092 20.2768C6.07707 19.8102 5.71822 19.1643 5.60929 18.456L4.35429 10.304C4.31046 10.019 4.32878 9.72786 4.408 9.45059C4.48722 9.17331 4.62545 8.91645 4.81324 8.6976C5.00102 8.47876 5.23391 8.30311 5.49594 8.1827C5.75796 8.06229 6.04293 7.99997 6.33129 8H17.6703C17.9587 7.99997 18.2436 8.06229 18.5057 8.1827C18.7677 8.30311 19.0006 8.47876 19.1883 8.6976C19.3761 8.91645 19.5144 9.17331 19.5936 9.45059C19.6728 9.72786 19.6911 10.019 19.6473 10.304L19.2313 13.004"
                fill="#e9d5ff"
                stroke="#9333EA"
            />

            <path
                d="M9 11V6C9 5.20435 9.31607 4.44129 9.87868 3.87868C10.4413 3.31607 11.2044 3 12 3C12.7956 3 13.5587 3.31607 14.1213 3.87868C14.6839 4.44129 15 5.20435 15 6V11"
                fill="#e9d5ff"
                stroke="#9333EA"
            />

            <path
                d="M16 21L21 16"
                fill="#ffffff"
                stroke="#9333EA"
            />

            <path
                d="M21 21V21.01"
                fill="#ffffff"
                stroke="#9333EA"
            />
            <path
                d="M16 16V16.01"
                fill="#ffffff"
                stroke="#9333EA"
            />

        </svg>
    );
};

export default PurchaseDiscountIcon