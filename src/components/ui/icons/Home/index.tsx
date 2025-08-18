import React from 'react'
import type { SVGProps } from 'react'

const HomeADIcon: React.FC<SVGProps<SVGSVGElement>> = ({
  width = '224',
  height = '124',
  fill = 'none',
  stroke = '#96666EA',
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 224 124'
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M49.1121 3.52154C37.4615 4.11989 25.5489 4.71416 16.3349 12.5502C8.70986 19.0337 5.67402 28.3574 4.22269 37.7672C2.41628 49.4679 2.86007 61.7178 3.95634 73.439C4.94165 83.9635 7.41822 94.2134 18.0214 99.4633C30.2047 105.492 44.1323 104.308 57.2121 103.709C72.7951 102.996 86.6826 101.631 101.68 105.767C103.198 106.185 104.658 106.607 105.736 107.877C109.207 111.951 107.037 116.787 104.698 121C111.462 119.209 116.726 116.074 121.51 111.348C123.254 109.631 124.382 107.644 126.739 106.529C134.594 102.82 145.388 104.746 153.346 104.594C164.265 104.381 173.385 104.336 183.758 103.922C191.822 103.603 199.967 103.824 206.842 99.4223C218.093 92.2175 219.691 77.2832 220.432 65.8734C221.417 50.6072 222.136 34.136 213.446 20.3534C208.821 13.0256 201.125 8.3576 192.439 5.96827C183.758 3.57895 174.943 3.52565 166.147 3.43139C147.71 3.24286 129.419 3.14859 111.076 3.00925C95.1687 2.8863 79.8785 4.03795 63.8295 3.59533C59.2092 3.46828 54.1629 3.25924 49.1121 3.52154Z"
        fill='#ffffff'
        stroke="#9333EA"
        strokeWidth="5"
        strokeMiterlimit="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#9333EA"
        fontSize="14"
        fontFamily="Arial"

      >Wear Confidence
        Every Day</text>
    </svg>
  )
}

export default HomeADIcon