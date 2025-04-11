import React from 'react'
import style from './CircleFood.module.css'
import { motion } from 'motion/react'

export default function CircleFood() {
  return (
    <motion.div
    initial={{ opacity: 0 }} animate={{ opacity: 1 , transition: { duration: 2}}} 
    className={`bg-sf-yellow h-40 w-40 md:h-70   md:w-70  lg:h-90 flex justify-center items-center lg:w-90  rounded-full ${style.circle}`}>
      <div className={` ${style.photo}` }>

      </div>
    </motion.div>
  )
}
