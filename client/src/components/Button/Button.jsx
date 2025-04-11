import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({text,action, arrow, route}) {
  return (
    <Link to={'/map'} className='bg-sf-brown px-4 py-1  flex items-center justify-center text-white rounded-3xl '>
        <span className='text-md lg:text-xl flex items-center font-Inter font-bold '>{text}</span>

        {arrow &&    <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 ml-2"
            >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>}
    </Link>
  )
}
