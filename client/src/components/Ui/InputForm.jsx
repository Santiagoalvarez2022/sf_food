import React from 'react'
import style from '../Ui/style.module.css'
export default function InputForm({name, id, type, placeholder, onChange}) {
  return (
    <input
    className={`placeholder-gray-400 placeholder-italic border h-8 md:h-10 rounded-[1em] mt-2 px-[1em] ${style.input}`} 
    name={name}
    id={id}
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    />
  )
}
