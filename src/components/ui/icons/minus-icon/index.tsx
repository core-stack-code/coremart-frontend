import React, { type SVGProps } from 'react'

const MinusIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            width={9}
            height={3}
            viewBox="0 0 9 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
            d="M1.778 1.5H8"
            stroke="#9333EA"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            />
        </svg>
    )
}

export default MinusIcon
