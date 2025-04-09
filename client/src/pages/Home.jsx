import React from 'react'
import Logo from '../components/Logo/Logo'
import CircleFood from '../components/CircleFood/CircleFood'
import Button from '../components/Button/Button'
import LocationFavorite from '../components/LocationFavorite/LocationFavorite'

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col px-8'>
        <div className='flex items-center justify-end mt-8'>
            <p className='text-sf-brown font-medium font-sf-logo text-3xl tracking-4 '>Log In</p>
        </div> 

        <div className='flex justify-center items-center my-10 '>
            <Logo />
        </div>

        <section className='mb-10'>
            <h3 className='text-black font-extrabold font-Inter text-2xl mb-8'>Discover <span className='text-sf-red'>the best eats</span> in San Francisco.</h3>

            <div className='grid grid-cols-2 font-Inter '>
                <div className='flex flex-col items-start '>
                    <p className=''>From Mission burritos to Fisherman's Wharf chowder, prepared by authentic locals.</p>
                    <br />
                    <Button text={'see map'} arrow={true}/>
                </div>
                <div className='flex justify-center items-center'>
                    <CircleFood />
                </div>
            </div>
      
        </section>
              
        <section className='flex flex-col font-Inter items-center gap-6'>
            <h3 className='text-black font-extrabold  text-2xl  text-center  '>Your favorite places <br /> deserve a spot on your list</h3>

            <p>From MissioSign in to save and share your go-to locations in SF with othersn burritos to Fisherman's Wharf chowder, prepared by authentic locals.</p>
            <LocationFavorite />

            <div className='my-10 flex items-center justify-center gap-6 '>
                <button className='bg-sf-brown px-8 py-2  flex items-center justify-center text-white rounded-3xl text-xl font-bold '>Sing up</button>

                <p className='text-sf-brown font-bold text-xl'>Log In</p>
            </div> 

        </section>

    </div> 
  )  
} 
