import { type SVGProps } from 'react'

const TwitterIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
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
            d="m1 1 11.733 16H17L5.267 1zm0 16 6.768-6.768m2.46-2.46L17 1"
            stroke="#9333ea"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            />
        </svg>
    );
};

export default TwitterIcon