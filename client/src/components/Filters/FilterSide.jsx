import React , {useEffect, useState} from 'react'
import { Filter } from './ui'
import {Link} from 'react-router-dom'
import FavoriteList from '../FavoriteList/FavoriteList'
export default function FilterSide({handlerPlacesToShow}) {
 const [nickname,setNickname] = useState('')
  
  useEffect(()=>{
    const name = localStorage.getItem('nickname');
    if (name) {
      setNickname(name)
    }
  },[])


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
          <p className='font-semibold mb-4'>{nickname}</p>
          <FavoriteList handlerPlacesToShow={handlerPlacesToShow}/>
        </div>
        <div className='bg-transparent mt-8'>
          <Filter handlerPlacesToshow={handlerPlacesToShow}/>
        </div>
    </div>
  ) 
}



