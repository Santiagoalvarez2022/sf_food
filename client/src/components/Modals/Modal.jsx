import React from 'react'

export default function Modal({seeModal, close}) {


    if (seeModal) {
        return
    }

  return (
    <div className={` transition-opacity duration-300  fixed top-60 left-10 lg:left-auto lg:right-30 z-50 bg-white  flex flex-col items-center max-w-[50%] lg:max-w-[30%] px-4 pt-6 pb-2 rounded-2xl shadow-black/20 shadow-lg`}>
        <div className='mb-2 w-full text-start'>
            <h2 className='text-xl font-semibold'>¡Welcome!</h2>
        </div>
        <p className='text-xs lg:text-base mb-2 '>Welcome to SF Food Explorer!
        Discover the best food trucks and push carts around San Francisco.</p>
        <p className='text-xs lg:text-base mb-2 '>
        Tap anywhere on the map to explore nearby spots to eat.
        We'll show you the closest food trucks or carts based on your location. Use the buttons at the top to filter what you want to explore.
        </p>
        <button onClick={()=>close()} className=' ease-in-out   bg-sf-brown w-max px-4 text-md font-Inter rounded-[.5em] text-sf-grey lg:py-1 cursor-pointer '>close</button>
    </div> 
  )
}
