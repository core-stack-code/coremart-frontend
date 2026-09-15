import React from "react";
import type { SVGProps } from "react";

const StarIcon: React.FC<SVGProps<SVGSVGElement>> = ({
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
            {...props}
        >
            <path
                d="M13.8488 4.21999C13.1648 2.59399 10.8348 2.59399 10.1508 4.21999L8.39678 8.38699L3.84478 8.74799C2.06978 8.88799 1.34978 11.079 2.70278 12.225L6.17078 15.162L5.11078 19.554C4.69778 21.267 6.58278 22.621 8.10278 21.703L11.9998 19.35L15.8968 21.704C17.4168 22.622 19.3018 21.268 18.8888 19.554L17.8288 15.164L21.2968 12.226C22.6498 11.08 21.9298 8.88999 20.1548 8.74899L15.6028 8.38899L13.8488 4.21999Z"
                fill="#FFD700"
            />

        </svg>
    );
};

export default StarIcon