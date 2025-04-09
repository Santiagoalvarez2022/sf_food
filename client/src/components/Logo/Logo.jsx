import React from 'react'
import style from './Logo.module.css'

export default function Logo() {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 100"
        className="w-full h-full"
      >
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          stroke="oklch(0.37 0.1103 31.59)"
          strokeWidth="10"
          paintOrder="stroke"
          className="fill-sf-yellow font-sf-logo text-[6em]"
        >
          SFood
        </text>
      </svg>
      );
}
/* return (
        <svg
        className="w-[300px] md:w-[400px] h-auto border border-red-400"
        viewBox="0 0 400 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="10"
          y="90"
          className="font-sf-logo"
          fontSize="80"
          fontWeight="900"
          stroke="oklch(0.37 0.1103 31.59)"
          strokeWidth="8"
          paintOrder="stroke"
          fill="oklch(0.89 0.182186 95.3305)"
        >
          SFood
        </text>
      </svg>
       */