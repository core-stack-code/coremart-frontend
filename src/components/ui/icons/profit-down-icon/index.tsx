import React, { type SVGProps } from 'react'

const ProfitDownIcon: React.FC<SVGProps<SVGSVGElement>> = ({
    width = 27,
    height = 12,
    fill = 'none',
    stroke = "#9333EA",
    ...props
}) => {
    return (
        <svg
            width={width}
            height={height}
            fill={fill}
            viewBox="0 0 27 12"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
            d="M18.7487 12L21.8078 9.71L15.2888 4.83L9.94524 8.83L0.0463867 1.41L1.92997 0L9.94524 6L15.2888 2L23.7048 8.29L26.7639 6V12H18.7487Z"
            fill="#F93C65"
            />
        </svg>
    )
}

export default ProfitDownIcon