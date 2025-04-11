import React,{useState,useEffect} from 'react'
import { useSearchParams } from 'react-router-dom';
import LogIn from '../components/Auth/LogIn';
import SignUp from '../components/Auth/SignUp';
import Logo from '../components/Logo/Logo';
import style from '../components/Auth/Auth.module.css'
import { Link } from 'react-router-dom';

export default function Auth() {
    const [searchParams] = useSearchParams();
    const form = searchParams.get('form'); // "123"

    console.log(form); 
    if (!form) {
        return 
    }
 
  return (
    <div className={`min-h-screen flex items-center justify-center font-Inter  `}>
        <div className={`border pb-5  pt-5 px-5 min-h-[50vh] w-[90%]  md:w-[70%] lg:w-[40%] bg-sf-grey rounded-[1em] ${style.containerAuth}`}>
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
                <p className='text-black '>Back</p>
              </Link>
           <Logo x='50%' y='50%'  textAnchor='middle' dominantBaseline='middle' size='text-[6em] ' />
        {form === 'login'  && <LogIn />}
        {form === 'signup' && <SignUp />}
        </div>
    </div> 
  )
}

