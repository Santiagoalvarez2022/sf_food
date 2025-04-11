import { getData } from "../../services/services/getData"
import { pushCartSVG,truckSVG } from "../../../utils/mapIcons"
import { logOut } from "../../services/services/auth"
import { useState } from "react"
import {motion} from 'motion/react'


export const LogOut = () =>{

    const cleanToken = async() =>{
        try {
            const response = await logOut()
            if (response.status === 200) {
                localStorage.removeItem('nickname')
                window.location.reload(); 
            }
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div onClick={()=>cleanToken()} className=" flex items-center justify-center cursor-pointer">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out-icon lucide-log-out h-6 w-6 "><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
        </div>
    )
}


export const FilterButtons = ({text,toFilter}) =>{
    return (
        <button onClick={()=>toFilter(text)} className='flex items-center gap-4 bg-sf-grey font-semibold px-4 py-1 shadow shadow-black/50 rounded-xl text-xs md:text-xl lg:text-base cursor-pointer min-w-[130px]'>

            {text === 'Food Truck' &&   <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24' fill='none' stroke='black' strokeWidth='1.1' strokeLinecap='round' strokeLinejoin='round'>
                <circle cx='12' cy='12' r='11' fill='white'/>
                      <g transform='scale(0.6) translate(8.5,8.5)'>
                    <path d='M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2'/>
                    <path d='M15 18H9'/>
                    <path d='M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14'/>
                    <circle cx='17' cy='18' r='2'/>
                    <circle cx='7' cy='18' r='2'/>
                </g>  
                </svg> }
                {
                    text === 'Push Cart' &&  <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24' stroke='black' strokeWidth='1.2' strokeLinecap='round' strokeLinejoin='round'>
                    <circle cx='12' cy='12' r='11' fill='white'/>
                    <g transform='scale(0.05) translate(100,100)' vectorEffect="non-scaling-stroke">
                      <path d='M104,216a16,16,0,1,1-16-16A16,16,0,0,1,104,216Zm88-16a16,16,0,1,0,16,16A16,16,0,0,0,192,200ZM239.71,74.14l-25.64,92.28A24.06,24.06,0,0,1,191,184H92.16A24.06,24.06,0,0,1,69,166.42L33.92,40H16a8,8,0,0,1,0-16H40a8,8,0,0,1,7.71,5.86L57.19,64H232a8,8,0,0,1,7.71,10.14ZM221.47,80H61.64l22.81,82.14A8,8,0,0,0,92.16,168H191a8,8,0,0,0,7.71-5.86Z' fill='black'/>
                    </g>
                  </svg>
                }
            {text}
        </button>
    )
}

export const Filter =({handlerPlacesToshow,setMiles,miles}) =>{
    const buttons = [{text:'Food Truck'},{text:'Push Cart'}]
    const addMiles = ( ) =>{
        if(miles >=6) return
        setMiles(miles + 1)
    }

    const decreaseMiles = () =>{
        if (miles <= 1) return
        setMiles(miles - 1)
    }


    //handlersPlacesToshow waits for an array to show in the screen
    const getFilterArray = async(type) =>{
        //get the complet array fitered 
        try {
            const response = await getData(type)
            handlerPlacesToshow(response.data)
        } catch (error) {
            console.log(error);
        }
    }


  
    return(
        <motiondiv className=' flex flex-wrap items-center  justify-end px-4 gap-2 '>
            { 
                buttons.map((btn,index)=><FilterButtons key={index} 
                text={btn.text}
                toFilter={getFilterArray}
                />)
            }
            <div className=""
            >
                <div className="flex bg-sf-grey gap-2 rounded-md">
                    <button onClick={()=>decreaseMiles()} className=" cursor-pointer  rounded-md bg-sf-brown px-2 text-sf-grey text-">-</button>
                    <p className="py-1">Miles</p>
                    <p className="py-1 w-2">{miles}</p>
                    <button onClick={()=>addMiles()} className=" cursor-pointer  rounded-md bg-sf-brown px-2 text-sf-grey text-">+</button>
                </div>

            </div>
        </motiondiv>
    )
}
