import { type SVGProps } from 'react'

const InstagramIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
            d="M1 5a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4z"
            stroke="#9333ea"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            />
            <path
            d="M6 9a3 3 0 1 0 6 0 3 3 0 0 0-6 0m7.5-4.5v.01"
            stroke="#9333ea"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            />
        </svg>
    );
};

export default InstagramIcon