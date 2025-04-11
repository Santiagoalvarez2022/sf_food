import React from 'react'
import LocationFavorite from '../LocationFavorite/LocationFavorite'
import { addFavorite } from '../../services/services/getData';

export default function InfoPlace({close, seeInfoPlace, infoPlace}) {
    // const {fooditems=[]} = infoPlace;
    let fooditems = []
    if (!seeInfoPlace) {
         return
    }
    const handlerFav = async() =>{
        try {
            const response = await addFavorite(infoPlace)
            if(response.status === 201){
                close()
            }
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='z-50  overflow-auto scroll bottom-0 fixed bg-white flex  justify-center flex-col rounded-t-[2em] md:rounded-b-[1em]  w-[100%] md:w-[40%] lg:w-[25%]  md:bottom-100 md:right-5 lg:bottom-10 font-Inter  shadow-[#8F8F8F]/50 shadow-lg  ' >
        <div className=' w-[100%]'>
            <LocationFavorite address={infoPlace.address} isFav={false} facilitytype={infoPlace.facilitytype} hanlderFav={handlerFav}/> 
        </div>
        <div className='px-4 pb-4  mb-4 mt-4'>
            <p className='text-xl font-bold w-full text-center lg:text-base '>{infoPlace.applicant}</p>
            <p className='text-xs pt-2'>Location {infoPlace.address}</p>
            <p className=' text-lg w-full text-center my-2 font-bold'>🔥 Try Our Signature Street Food!</p>
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
