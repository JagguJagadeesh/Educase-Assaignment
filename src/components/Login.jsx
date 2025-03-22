import React,{useState} from 'react'
import Input from './Input'
import Button from './Button'
import { useStore } from '../utils/store'

function Login() {
    const setSlide = useStore(state=>state.updateSlide)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleLogin() {
      // console.log(email,password)
      if(email!=='' && password!==''){
        setSlide('account')
      }else{
        setSlide('login')
      }
    }

  return (
    <div className="h-full py-6 px-4 flex flex-col gap-1">
        <h1 className='text-2xl font-medium font-san'>Signin to your PopX account</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <Input className={email!==""?'':'border-red-500'} label='Email Address' type='email' placeholder='example@gmail.com' onChange={(e)=>setEmail(e.target.value)}/>
        <Input className={password!==""?'':'border-red-500'} label='Password' type='password' placeholder='**********' onChange={(e)=>setPassword(e.target.value)}/>
        <Button onClick={handleLogin} text='Login' className='mt-8 py-2 text-white' />
    </div>
  )
}

export default Login