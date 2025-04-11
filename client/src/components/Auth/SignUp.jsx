import React,{useState} from 'react'
import InputForm from '../Ui/InputForm';
import { Link, useNavigate } from 'react-router-dom';
import ButtonAction from '../Ui/ButtonAction';
import { signUp } from '../../services/services/auth';
import Button from '../Ui/Button';


export const validateErros = (form) =>{
    let error = {};
    if (!form.nickname || !form.password || !form.repeat_password) {
        error.empty = "Please complete all fields."
    } 
    if ((form.repeat_password && form.repeat_password) && form.password !== form.repeat_password ) {
        error.diferent = "The passwords are different"
    } 
    if(form.password && form.password.length < 8){
        error.password_size = "The password must be at least 8 characters long."
    }

    return error;
}

export default function SignUp() {
    const navigate = useNavigate()
    const [success, setSucces] = useState(false)
    const [error,setError] = useState( {
        inital :""
    })



    const [form,setForm] = useState({
        nickname: "",
        password:"",
        repeat_password:""
    })
    const handlerForm = ({target}) =>{
        const {name,value} = target;
        setForm({...form,[name]:value})
        setError(validateErros({...form,[name]:value}))
    }

    const sendData = async() =>{
        try {
            const response = await signUp(form)
            if (response.request.status === 201) {
                setSucces(true)
            }
        } catch (error) {
            setError(error)
        }
    }

    if (success) {
        return ( 
            <div className='flex flex-col text-center'>
                <p className='text-green-800 font-bold text-center text-xl md:text-2xl lg:text-lg'>User created successfully</p>
                <div className='mt-10 flex justify-center w-full'>
                    <Button text='Log In' arrow={true} route={'/auth?form=login'}/>
                </div>
            </div>
        )
    }

  return (
     <div className='flex flex-col '>
            <div className=' flex gap-2 items-center '>
            <label className='md:text-xl' htmlFor="nickname">Enter a unique nickname</label>
            <Link to={'/auth?form=login'} className=' text-xs md:text-base font-semibold text-sf-red'>Log in</Link>
            </div>
            <InputForm type="text" id='nickname' name='nickname' placeholder='Nickname' onChange={handlerForm}/> 
    
            <label className='mt-4 md:text-xl' htmlFor="password">Create a secure password</label>
            <InputForm type="password" id='password' name='password' placeholder='Password' onChange={handlerForm}/> 

            <label className='mt-4 md:text-xl' htmlFor="repeat_password">Confirm your password</label>
            <InputForm type="password" id='repeat_password' name='repeat_password' placeholder='Repeat the password' onChange={handlerForm}/> 
    
            <div className='w-full flex justify-end md:pr-4'>
                <div className='  mt-4 md:mt-10  '>
                   {   !Object.keys(error).length &&  <ButtonAction action={sendData} text={"Create Account"} />}
                </div>
            </div> 
    
            <ul className='mt-4'>
                {
                    Object.entries(error).map(([key, value])=>{
                        return  <li className='text-xs text-black font-bold' key={key}>
                        {Array.isArray(value) ? value[0] : value}
                        </li>
                    }) 
                }
            </ul>
        </div>
  )
}
