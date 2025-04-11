import React, { useState } from 'react'
import style from './Auth.module.css'
import Button from '../Ui/Button';
import InputForm from '../Ui/InputForm';
import { Link, useNavigate } from 'react-router-dom';
import { logIn } from '../../services/services/auth';
import ButtonAction from '../Ui/ButtonAction';

const validateErros = (form) =>{
    let error = {};
    if (!form.nickname || !form.password) {
        error.empty = "Please enter both your nickname and password."
    }
    return error;
}


export default function LogIn() {
    const navigate = useNavigate()
    const [error,setError] = useState( {
        inital :""
    }) 

    const [form,setForm] = useState({
        nickname: "",
        password:""
    })
    const handlerForm = ({target}) =>{
        const {name,value} = target;
        setForm({...form,[name]:value})
        setError(validateErros({...form,[name]:value}))
    }

    console.log(form);
    console.log("error ", error);
    const sendData = async() =>{
        try {
            console.log('click');
            const response = await logIn(form)
            console.log(response);
            if (response.request.status === 200) {
                localStorage.setItem('nickname',response.data.nickname)
               navigate('/map')
            }
        } catch (error) {
            console.log(error);
            setError(error)
        }
        }

  return (
    <div className='flex flex-col '>
        <div className=' flex gap-2 items-center '>
        <label className='md:text-xl' htmlFor="nickname">What's your nickname?</label>
        <Link to={'/auth?form=signup'} className='text-xs md:text-base font-semibold text-sf-red'>Sign up</Link>
        </div>
        <InputForm type="text" id='nickname' name='nickname' placeholder='Nickname' onChange={handlerForm}/> 

        <label className='mt-4 md:text-xl' htmlFor="password">Password</label>
        <InputForm type="password" id='password' name='password' placeholder='Password' onChange={handlerForm}/> 

        <div className='w-full flex justify-end md:pr-4'>
            <div className='  mt-4 md:mt-10 '>
            {   !Object.keys(error).length &&  <ButtonAction text={"Let's Go!"}  action={sendData} />}
            </div>
        </div> 

        <ul className=' mt-4'>
            {
                Object.entries(error).map(([key, value])=>{
                    return  <li className='text-xs text-black sfont-bold' key={key}>
                    {Array.isArray(value) ? value[0] : value}
                    </li>
                }) 
            }
        </ul>
    </div>
  )
}
/*
 <div className='flex justify-center items-center '>
            {
                !Object.keys(error).length &&  <BtnAuth action={sendData} text={'Entrar'} /> 
            }
            </div>
            <ul>
                {
                Object.entries(error).map(([key, value])=>{
                    
                    return  <li className='text-xs text-red-500 font-bold' key={key}>
                    {Array.isArray(value) ? value[0] : value}
                    </li>
                }) 
                }
            </ul>

*/