import React from "react";
import type { SVGProps } from "react";

const DetailsRatingStarIcon: React.FC<SVGProps<SVGSVGElement>> = ({
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
            strokeWidth="2"
            {...props}
        >
            <path
                d="M12.7471 2.23242C13.4038 0.58915 15.5962 0.589152 16.2529 2.23242L18.7959 8.5957L19.0254 9.16992L19.6416 9.2207L26.2412 9.77051C27.8224 9.90272 28.6214 11.9891 27.4365 13.2188L27.3154 13.335L22.2871 17.8193L21.8457 18.2129L21.9775 18.7891L23.5146 25.4893C23.9397 27.3466 22.041 28.5641 20.6875 27.7041L15.0361 24.1104L14.5 23.7695L13.9639 24.1104L8.3125 27.7021C6.95844 28.5628 5.06042 27.3445 5.48535 25.4893L7.02246 18.7861L7.1543 18.209L6.71289 17.8164L1.68457 13.333C0.36994 12.1608 1.07929 10.0424 2.60742 9.78809L2.75781 9.76953L9.3584 9.21777L9.97461 9.16699L10.2041 8.59277L12.7471 2.23242Z"
                fill="#ffffff"
                stroke="#9333EA"
            />

        </svg>
    );
};

export default DetailsRatingStarIcon