import { type SVGProps } from 'react'

const LocationIcon: React.FC<SVGProps<SVGSVGElement>> = ({
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
                d="M20.972 11.291C20.8319 9.51903 20.1702 7.82824 19.0704 6.43185C17.9706 5.03546 16.4819 3.99599 14.7921 3.44455C13.1023 2.89311 11.2871 2.85438 9.57534 3.33325C7.86357 3.81212 6.33192 4.78715 5.17357 6.13536C4.01521 7.48358 3.28201 9.1446 3.06644 10.909C2.85087 12.6733 3.16257 14.462 3.96225 16.0495C4.76192 17.6369 6.01375 18.952 7.55987 19.829C9.10598 20.7059 10.8771 21.1054 12.65 20.977"
                fill="#ffffff"
                stroke="#9333EA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3.59998 9H20.4"
                fill="#ffffff"
                stroke="#9333EA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3.59998 15H12.5"
                fill="#ffffff"
                stroke="#9333EA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11.5 3C9.81538 5.69961 8.92224 8.81787 8.92224 12C8.92224 15.1821 9.81538 18.3004 11.5 21"
                fill="#ffffff"
                stroke="#9333EA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.5 3C14.1887 5.70447 15.0821 8.82962 15.078 12.018"
                fill="#ffffff"
                stroke="#9333EA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M21.121 20.121C21.5406 19.7015 21.8265 19.167 21.9423 18.585C22.0581 18.003 21.9988 17.3998 21.7717 16.8515C21.5447 16.3033 21.1602 15.8347 20.6668 15.505C20.1734 15.1754 19.5934 14.9994 19 14.9994C18.4066 14.9994 17.8266 15.1754 17.3332 15.505C16.8398 15.8347 16.4553 16.3033 16.2283 16.8515C16.0012 17.3998 15.9419 18.003 16.0577 18.585C16.1735 19.167 16.4594 19.7015 16.879 20.121C17.297 20.54 18.004 21.166 19 22C20.051 21.11 20.759 20.484 21.121 20.121Z"
                fill="#ffffff"
                stroke="#9333EA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M19 18V18.01"
                fill="#ffffff"
                stroke="#9333EA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />


        </svg>
    );
};

export default LocationIcon