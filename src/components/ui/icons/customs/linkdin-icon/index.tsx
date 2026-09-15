import { type SVGProps } from 'react'

const LinkdinIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M6 9v5m0-8v.01M10 14V9m4 5v-3a2 2 0 1 0-4 0"
                stroke="#9333ea"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M1 5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4z"
                stroke="#9333ea"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default LinkdinIcon