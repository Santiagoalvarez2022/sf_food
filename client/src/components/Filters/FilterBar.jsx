import React , {useEffect, useState} from 'react'
import {Filter,FilterButtons, LogOut} from './ui.jsx'
import { Link } from 'react-router-dom'
import FavoriteList from '../FavoriteList/FavoriteList.jsx'
import useIsLogin from '../../hooks/userNickname.js'


export default function FilterBar({handlerPlacesToShow, setMiles,miles}) {

  const nickname = useIsLogin()

  return (
    <div className=' flex flex-col gap-2 abosulute fixed top-10 left-0 w-full z-50 mt font-Inter lg:hidden '>
        <div className=' shadow-black/20 shadow-lg bg-sf-grey lg:bg-sf-grey w-full p-5 md:p-8  lg:p-6 lg:pr-10 flex justify-between items-center' >
            <div className='flex items-center  w-full gap-4 justify-between'>
              <Link to='/' className='flex items-center'>
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
                <p className='text-black  text-xs  md:text-base '>back</p>
              </Link>
                {
                  nickname 
                    ? <div className='flex items-center gap-2'>
                      <FavoriteList handlerPlacesToShow={handlerPlacesToShow}/>
                      <p className=' text-xs lg:opacity-0'>{nickname}</p> 
                      <LogOut /> 
                    </div> 

                    :  <Link to='/auth?form=login' className='font-medium  tracking-4 cursor-pointer text-xs  md:text-base'>Log In</Link> 
                }
            </div>
        </div>

        <Filter setMiles={setMiles} miles={miles} handlerPlacesToshow={handlerPlacesToShow}/>
    </div>
  )
}
