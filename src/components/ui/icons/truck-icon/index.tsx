import React from "react";
import type { SVGProps } from "react";

const TruckIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={47}
      height={33}
      viewBox="0 0 47 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.5 7.219h20.157l1.55 3.093H2.052zm2.067 6.187h20.158l1.55 3.094H4.118zm33.596 16.5a3.093 3.093 0 1 0 0-6.187 3.093 3.093 0 1 0 0 6.187m3.101-18.562h-5.169V16.5h9.221zM15.489 29.906a3.093 3.093 0 1 0 0-6.187 3.093 3.093 0 1 0 0 6.187M40.298 8.25 46.5 16.5v10.313h-4.135A6.187 6.187 0 0 1 36.163 33a6.187 6.187 0 0 1-6.202-6.187h-8.27c0 3.423-2.791 6.187-6.202 6.187a6.187 6.187 0 0 1-6.202-6.187H5.152v-7.22h4.135v3.095h1.57a6.24 6.24 0 0 1 4.632-2.063 6.23 6.23 0 0 1 4.63 2.063h9.842V4.125H5.15A4.12 4.12 0 0 1 9.288 0h24.809v8.25z"
        fill="#fff"
      />
    </svg>
  );
};

export default TruckIcon;
