import React, { type SVGProps } from "react"

const CloseIcon: React.FC<SVGProps<SVGSVGElement>> = ({
    width = "12",
    height = "12",
    fill = "none",
    stroke = '#9333EA',
    ...props
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            >
                <path
                d="M10.875 1.125L1.125 10.875M1.125 1.125L10.875 10.875"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
        </svg>
        
    )
}

export default CloseIcon