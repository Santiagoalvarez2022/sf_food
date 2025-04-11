import React from 'react'
import LocationFavorite from '../LocationFavorite/LocationFavorite'

export default function InfoPlace({close, seeInfoPlace, infoPlace}) {
   
    if (!seeInfoPlace) {
         return
    }

console.log('info pklace en inflo placeee componente',infoPlace);
    const {fooditems} = infoPlace;
  return (
    <div className='z-50 max-h-[40vh]   bottom-0 fixed bg-white flex  justify-center flex-col rounded-t-[2em] md:rounded-b-[1em]  w-[100%] md:w-[40%] lg:w-[25%]  md:bottom-100 md:right-5 lg:bottom-10 font-Inter  shadow-[#8F8F8F]/50 shadow-lg ' >
        <div className=' w-[100%]'>
            <LocationFavorite address={infoPlace.address} facilitytype={infoPlace.facilitytype} /> 
        </div>
        <div className='px-4 pb-2  mt-4'>
            <p className='text-xl font-bold w-full text-center '>{infoPlace.applicant}</p>
            <p className=' text-lg w-full text-center my-3 font-bold'>🔥 Try Our Signature Street Food!</p>
            <p className='mt-2 font-semibold '>Menu Highlights:</p>
            <ul className='list-disc list-inside max-h-[20vh] overflow-auto w-full px-5 font-semibold '>
                {
                    fooditems.length && fooditems.map((food,index)=>{
                        return <li className='' key={index}>{food}</li>
                    })
                }
            </ul>
        </div>
    </div> 
  )
}
