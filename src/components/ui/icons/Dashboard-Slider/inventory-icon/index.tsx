import type { SVGProps } from "react"


const DashboardSliderInventoryIcon: React.FC<SVGProps<SVGSVGElement>> = ({
    width = 15,
    height = 17,
    fill = 'none',
    stroke = "#9333EA",
    ...props
}) => {
    return (
        <svg
            width={width}
            height={height}
            fill={fill}
            viewBox="0 0 15 17"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
            d="M0.4375 0H1.125H13.5H14.1875V0.6875V15.8125V16.5H13.5H1.125H0.4375V15.8125V0.6875V0ZM1.8125 1.375V4.8125H12.8125V1.375H1.8125ZM1.8125 6.1875V10.3125H12.8125V6.1875H1.8125ZM1.8125 11.6875V15.125H12.8125V11.6875H1.8125Z"
                fill={fill}
            />
        </svg>
    )
}

export default DashboardSliderInventoryIcon