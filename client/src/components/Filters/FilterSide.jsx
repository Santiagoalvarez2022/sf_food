import React from 'react'
import { Filter } from './ui'
import {Link} from 'react-router-dom'
export default function FilterSide({handlerPlacesToShow}) {
  return (
    <div className='hidden lg:flex fixed left-0 z-50  h-screen min-w-[15%] font-Inter '>

        <div className='bg-sf-grey flex flex-col p-8 shadow-xl shadow-black/50 '>

          <Link to='/' className='flex hover:font-bold mb-15 '>
            <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="currentColor" 
                className="w-6 h-6">
              <path strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            <p className='text-black '>back</p>
          </Link>
          <p className='font-semibold mb-4'>Santiago Alvarez</p>

          <div className='flex items-center gap-2 '>
            <p className='text-md hover:text-xl font-semibold cursor-pointer '>My List</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fc5e5e" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </div>


        </div>
        <div className='bg-transparent mt-8'>
          <Filter handlerPlacesToshow={handlerPlacesToShow}/>
        </div>
    </div>
  ) 
}



