import React from "react";
import type { SVGProps } from "react";

const AboutServiceIcon: React.FC<SVGProps<SVGSVGElement>> = ({
    width = 41,
    height = 48,
    fill = "none",
    stroke = "#9333EA",
    ...props
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 41 48"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M2 27.2084V20.3333C2 15.471 3.93154 10.8079 7.36971 7.36971C10.8079 3.93154 15.471 2 20.3333 2C25.1957 2 29.8588 3.93154 33.297 7.36971C36.7352 10.8079 38.6667 15.471 38.6667 20.3333V27.2084"
                fill="#9333EA"
                stroke="#ffffff"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                />

            <path
                d="M34.0834 38.6667C34.0834 42.464 27.928 45.5417 20.3334 45.5417"
                fill="#9333EA"
                stroke="#ffffff"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                />

            <path
                d="M2 27.2083C2 25.9928 2.48289 24.827 3.34243 23.9674C4.20197 23.1079 5.36776 22.625 6.58334 22.625H8.87501C10.0906 22.625 11.2564 23.1079 12.1159 23.9674C12.9755 24.827 13.4583 25.9928 13.4583 27.2083V34.0833C13.4583 35.2989 12.9755 36.4647 12.1159 37.3243C11.2564 38.1838 10.0906 38.6667 8.87501 38.6667H6.58334C5.36776 38.6667 4.20197 38.1838 3.34243 37.3243C2.48289 36.4647 2 35.2989 2 34.0833V27.2083Z"
                fill="#93333EA"
                stroke="#ffffff"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                />

            <path
                d="M27.2084 27.2083C27.2084 25.9928 27.6913 24.827 28.5508 23.9674C29.4104 23.1079 30.5762 22.625 31.7917 22.625H34.0834C35.299 22.625 36.4648 23.1079 37.3243 23.9674C38.1839 24.827 38.6667 25.9928 38.6667 27.2083V34.0833C38.6667 35.2989 38.1839 36.4647 37.3243 37.3243C36.4648 38.1838 35.299 38.6667 34.0834 38.6667H31.7917C30.5762 38.6667 29.4104 38.1838 28.5508 37.3243C27.6913 36.4647 27.2084 35.2989 27.2084 34.0833V27.2083Z"
               fill="#93333EA"
                stroke="#ffffff"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default AboutServiceIcon;