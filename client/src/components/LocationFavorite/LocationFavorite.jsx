import React from 'react'

export default function LocationFavorite(
  {
  address,
  facilitytype
  }) {
  
  return (
    <div className={`bg-[#E9E9E9] p-3 rounded-l-[2em] rounded-r-[1.5em] shadow-[#8F8F8F]/50 shadow-lg flex justify-between items-center pr-4 w-full `}>

        <div className='bg-[#8F8F8F]  h-10 w-10 rounded-full'></div>
        <div>
            <h3 className='text-center font-bold text-xl leading-tight'>{address}</h3>
            <p className='leading-tight w-full text-center'>{facilitytype}</p>
        </div>
        <div >
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fc5e5e" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
        </div>
    </div>
  )
}

