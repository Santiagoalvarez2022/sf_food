import React from 'react'
import {Filter,FilterButtons} from './ui.jsx'


export default function FilterBar({handlerPlacesToShow}) {

  return (
    <div className=' flex flex-col gap-2 abosulute fixed top-10 left-0 w-full z-50 mt font-Inter lg:hidden '>
        <div className=' shadow-black/20 shadow-lg bg-sf-grey lg:bg-sf-grey w-full p-5 md:p-8  lg:p-6 lg:pr-10 flex justify-between' >
            <p className='font-bold text-md md:text-xl lg:opacity-0'>santiago alvarez</p>
            <div className='flex gap-1 items-center'>
            <p className='text-xs md:text-xl lg:text-lg font-semibold'>My List</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fc5e5e" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 md:size-9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
            </div>
        </div>
        <Filter handlerPlacesToshow={handlerPlacesToShow}/>
    </div>
  )
}
