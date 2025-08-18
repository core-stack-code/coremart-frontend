import { type SVGProps } from 'react'

const TwitterIcon: React.FC<SVGProps<SVGSVGElement>> = ({
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
               d="M4 4L15.733 20H20L8.267 4H4Z"
                fill="#ffffff"
                stroke="#9333EA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
              d="M4 20L10.768 13.232M13.228 10.772L20 4"
                // fill="#ffffff"
                stroke="#9333EA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default TwitterIcon