import React from 'react'

export default function ButtonAction({text,action, arrow}) {
    return (
      <div onClick={()=>action()} className='bg-sf-brown px-4 py-1  flex items-center justify-center text-white rounded-3xl shadow-md shadow-black/30'>
          <span className='text-md md:text-xl flex items-center font-Inter font-bold w-fit '>{text}</span>
          {arrow &&  <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 ml-2"
              >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>}
      </div>
    )
  }
  