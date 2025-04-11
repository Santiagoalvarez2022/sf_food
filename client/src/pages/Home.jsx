import React, { useEffect, useState } from 'react'
import Logo from '../components/Logo/Logo'
import CircleFood from '../components/CircleFood/CircleFood'
import Button from '../components/Ui/Button'
import LocationFavorite from '../components/LocationFavorite/LocationFavorite'
import { Link } from 'react-router-dom'
import useIsLogin from '../hooks/userNickname'
import { motion } from "motion/react"

export default function Home() {
    const nickname = useIsLogin()

  return (
    <div className='min-h-screen flex flex-col px-8 md:px-15 lg:px-40'>
        <div className='flex items-center justify-end mt-8'>
            { !nickname 
            ?  <Link to='/auth?form=login' className='text-sf-brown font-medium font-sf-logo text-3xl tracking-4 cursor-pointer '>Log In</Link> 
            : <p className='text-sf-brown font-medium font-sf-logo text-3xl tracking-4  '>{nickname}</p>
            }
 
        </div>  

        <motion.div 
        initial={{ scale: 0 }} animate={{ scale: .9 , transition: { duration: .7 }}}
        className='flex justify-center items-center mt-10 md:hidden'>
            <Logo x='50%' y='50%'  textAnchor='middle' dominantBaseline='middle' size='text-[6em]' />
        </motion.div>

        <section className='mb-14 '>
            <h3 className='md:hidden text-black font-extrabold font-Inter text-2xl w-[90%] mt-12 mb-6   '>Discover <span className='text-sf-red'>the best eats</span> in San Francisco.</h3>

            <div className='grid grid-cols-2 font-Inter '>
                <div className='flex flex-col items-start '>
                    <div 
                  
                    className='hidden md:block'> 
                        <Logo x='1%' y='70%'  textAnchor='start' dominantBaseline='middle' size=' md:text-[8em] lg:text-[10em] '/>
                    </div>
                    <h3 className='   hidden md:block text-black font-extrabold font-Inter text-2xl lg:text-3xl md:my-4 lg:w-[70%] '>Discover <span className='text-sf-red'>the best eats</span> in San Francisco.</h3>

                    <p className='lg:text-xl  lg:w-[70%]'>From Mission burritos to Fisherman's Wharf chowder, prepared by authentic locals.</p>
                    <br />
                    <Button route={'/map'} text={'see map'} arrow={true}/>
                </div>
                <div className='flex justify-center items-center'>
                    <CircleFood />
                </div>
            </div>
      
        </section>
              
        <section className='md:grid md:grid-cols-2'>

            <div className='hidden md:flex items-center w-[90%] lg:w-[70%]'>
            <LocationFavorite address={'Philz Coffee Truck'} facilitytype='Truck' />
            </div>

            <div className='flex flex-col font-Inter items-center md:items-start gap-6'>
                <h3 className='text-black font-extrabold  text-2xl  text-center md:text-start '>Your favorite places <br /> deserve a spot on your list</h3>

                <p>From MissioSign in to save and share your go-to locations in SF with othersn burritos to Fisherman's Wharf chowder, prepared by authentic locals.</p>

                <div className='w-full md:hidden mt-6'>
                    <LocationFavorite address={'Philz Coffee Truck'} facilitytype='Truck' />
                </div>

                <div className=' flex w-full items-center justify-center gap-6 mt-6 mb-15 '>
                    <Link to={'/auth?form=signup'} className='bg-sf-brown px-8 py-2  flex items-center justify-center text-white rounded-3xl text-xl font-bold '>Sign up</Link>

                    <Link to={'/auth?form=login'} className='text-sf-brown font-bold text-xl'>Log In</Link>
                </div> 
            </div>

        </section>

    </div> 
  )  
} 
