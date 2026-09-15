import React from "react";
import type { SVGProps } from "react";

const AddCartIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.139 10.218c.393 1.576.59 2.364 1.176 2.824.586.458 1.396.458 3.017.458h3.336c1.62 0 2.431 0 3.018-.458.586-.46.782-1.248 1.175-2.824.618-2.479.927-3.718.279-4.551-.65-.833-1.924-.833-4.472-.833H5.332c-2.548 0-3.822 0-4.471.833C.48 6.156.429 6.785.577 7.722"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="m12.403 5.194-.512-1.881c-.197-.726-.296-1.088-.498-1.362a1.8 1.8 0 0 0-.791-.605c-.317-.124-.692-.124-1.441-.124M1.597 5.194l.511-1.881c.198-.726.296-1.088.499-1.362.202-.272.476-.482.79-.605.318-.124.692-.124 1.442-.124m.001 0A.723.723 0 0 1 5.56.5h2.88a.72.72 0 0 1 .72.722.723.723 0 0 1-.72.722H5.559a.72.72 0 0 1-.72-.722Z"
        stroke="currentColor"
      />
    </svg>
  );
};

export default AddCartIcon;
