import React, { type SVGProps } from 'react'

const DashboardSliderMessagesIcon: React.FC<SVGProps<SVGSVGElement>> = ({
    width = 20,
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
            viewBox="0 0 20 18"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
            d="M0.375 0.6875H1.0625H13.4375H14.125V1.375V11V11.6875H13.4375H7.50781L4.24219 14.2656L3.125 15.2109V13.75V11.6875H1.0625H0.375V11V1.375V0.6875ZM1.75 2.0625V10.3125H3.8125H4.5V11V12.2891L6.82031 10.4844L6.99219 10.3125H7.25H12.75V2.0625H1.75ZM15.5 3.4375H19.625V14.4375H16.875V17.9609L12.4922 14.4375H6.13281L7.85156 13.0625H13.0078L15.5 15.0391V13.0625H18.25V4.8125H15.5V3.4375Z"
                fill={fill}
            />
        </svg>
    )
}
export default DashboardSliderMessagesIcon