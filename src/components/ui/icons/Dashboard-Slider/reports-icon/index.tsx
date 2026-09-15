import React, { type SVGProps } from 'react'

const DashboardSliderReportsIcon: React.FC<SVGProps<SVGSVGElement>> = ({
    width = 15,
    height = 18,
    fill = 'none',
    stroke = "#9333EA",
    ...props
}) => {
    return (
        <svg
            width={width}
            height={height}
            fill={fill}
            viewBox="0 0 15 18"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
           d="M5.50781 1.6875C5.88021 0.770833 6.48177 0.3125 7.3125 0.3125C8.14323 0.3125 8.74479 0.770833 9.11719 1.6875H10.75H11.4375H13.5H14.1875V2.375V16.8125V17.5H13.5H1.125H0.4375V16.8125V2.375V1.6875H1.125H3.1875H3.875H5.50781ZM7.78516 1.90234C7.67057 1.75911 7.51302 1.6875 7.3125 1.6875C7.11198 1.6875 6.9401 1.75911 6.79688 1.90234C6.68229 2.01693 6.625 2.17448 6.625 2.375V3.0625H5.9375H4.5625V4.4375H10.0625V3.0625H8.6875H8V2.375C8 2.17448 7.92839 2.01693 7.78516 1.90234ZM1.8125 3.0625V16.125H12.8125V3.0625H11.4375V5.125V5.8125H10.75H3.875H3.1875V5.125V3.0625H1.8125Z"
                fill={fill}
            />
        </svg>
    )
}

export default DashboardSliderReportsIcon