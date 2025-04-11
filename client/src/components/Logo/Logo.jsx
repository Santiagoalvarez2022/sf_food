import React from 'react'
import style from './Logo.module.css'

export default function Logo({x,y,textAnchor,dominantBaseline, size}) {

    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 100"
        className="w-full h-full"
      >
        <text
          x={x}
          y={y}
          textAnchor={textAnchor}
          dominantBaseline={dominantBaseline}
          stroke="oklch(0.37 0.1103 31.59)"
          strokeWidth="10"
          paintOrder="stroke"
          className={`fill-sf-yellow font-sf-logo ${size} `}
        >
          SFood
        </text>
      </svg>
      );
}
