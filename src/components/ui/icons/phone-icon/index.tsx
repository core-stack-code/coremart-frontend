import { type SVGProps } from 'react'

const PhoneIcon: React.FC<SVGProps<SVGSVGElement>> = ({
    width = 20,
    height = 19,
    fill = "none",
    stroke = "#9333EA",
    ...props
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 20 19"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >

            <path
               d="M3.11765 1H7.35294L9.47059 5.76471L6.82353 7.19412C7.95749 9.26346 9.81838 10.9383 12.1176 11.9588L13.7059 9.57647L19 11.4824V15.2941C19 15.7996 18.7769 16.2844 18.3798 16.6418C17.9826 16.9992 17.444 17.2 16.8824 17.2C12.7522 16.9741 8.85663 15.3956 5.93076 12.7623C3.00489 10.129 1.25099 6.62305 1 2.90588C1 2.40041 1.22311 1.91564 1.62024 1.55822C2.01738 1.2008 2.55601 1 3.11765 1Z"
                fill="#ffffff"
                stroke="#9333EA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default PhoneIcon