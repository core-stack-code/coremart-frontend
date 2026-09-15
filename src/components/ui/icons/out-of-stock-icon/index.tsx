import React, { type SVGProps } from 'react'

const OutOfStockIcon: React.FC<SVGProps<SVGSVGElement>> = ({
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
            <g clip-path="url(#clip0_1973_238)">
                <path d="M8.812 4.793L12 3L20 7.5V16M17.718 17.784L12 21L4 16.5V7.5L6.223 6.25" stroke="#EF4444" stroke-linecap="round" stroke-linejoin="round"></path>

                <path d="M14.543 10.57L20 7.5" stroke="#EF4444" stroke-linecap="round" stroke-linejoin="round"></path>

                <path d="M12 12V21" stroke="#EF4444" stroke-linecap="round" stroke-linejoin="round"></path>

                <path d="M12 12L4 7.5" stroke="#EF4444" stroke-linecap="round" stroke-linejoin="round"></path>

                <path d="M16 5.25L11.65 7.697M9.086 9.139L8 9.75" stroke="#EF4444" stroke-linecap="round" stroke-linejoin="round"></path>

                <path d="M3 3L21 21" stroke="#EF4444" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
        </svg>
    )
}

export default OutOfStockIcon