import React , {useEffect, useState} from 'react'
import {Filter,FilterButtons} from './ui.jsx'
import { Link } from 'react-router-dom'
import FavoriteList from '../FavoriteList/FavoriteList.jsx'


export default function FilterBar({handlerPlacesToShow}) {
  const [nickname,setNickname] = useState('')
  
  useEffect(()=>{
    const name = localStorage.getItem('nickname');
    if (name) {
      setNickname(name)
    }
  },[])

  return (
    <div className=' flex flex-col gap-2 abosulute fixed top-10 left-0 w-full z-50 mt font-Inter lg:hidden '>
        <div className=' shadow-black/20 shadow-lg bg-sf-grey lg:bg-sf-grey w-full p-5 md:p-8  lg:p-6 lg:pr-10 flex justify-between' >
            <div className='flex items-center gap-4'>
              <Link to='/' className='flex'>
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
              <p className='font-bold text-md md:text-xl lg:opacity-0'>{nickname}</p>

            </div>
             <FavoriteList handlerPlacesToShow={handlerPlacesToShow}/>
        </div>
        <Filter handlerPlacesToshow={handlerPlacesToShow}/>
    </div>
  )
}
