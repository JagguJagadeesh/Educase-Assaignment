import React,{useState} from 'react'
import Input from './Input'
import Button from './Button'
import { useStore } from '../utils/store'


function Signup() {
    const setSlide = useStore(state=>state.updateSlide)

    const [name,setName] = useState("")
    const [number,setNumber] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [company,setCompany] = useState("")
    const [agency,setAgency] = useState("")


    function handleSignup() {
      // console.log(name,number,email,password,company,agency)
      if(name!=='' && email!=='' && number!=='' && password!=='' && company!=='' && agency!==''){
        setSlide('account')
      }else{
        setSlide('register')
      }

    }

  return (
    <div className="h-full py-6 px-4 flex flex-col">
        <h1 className='text-xl font-medium font-san'>Create your PopX account</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <Input className={`${name!==""?'':'border-red-500'}`} label='Full Name' type='text' placeholder='Jhon' onChange={(e)=>setName(e.target.value)}/>
        <Input className={`${number!==""?'':'border-red-500'}`} label='Phone Number' type='number' placeholder='0000000000' onChange={(e)=>setNumber(e.target.value)}/>
        <Input className={`${email!==""?'':'border-red-500'}`} label='Email Address' type='email' placeholder='example@gmail.com' onChange={(e)=>setEmail(e.target.value)}/>
        <Input className={`${password!==""?'':'border-red-500'}`} label='Password' type='password' placeholder='**********' onChange={(e)=>setPassword(e.target.value)}/>
        <Input className={`${company!==""?'':'border-red-500'}`} label='Company' type='text' placeholder='Company Name' onChange={(e)=>setCompany(e.target.value)}/>
        <div className='mt-6'>
          <p>Are you an Agency?</p>
          <input type="radio" name="yes" id="yes" value='yes'  onClick={(e)=>setAgency(e.target.value)} /> <label htmlFor="yes"> Yes</label>&nbsp;
          <input type="radio" name="no" id="no" value='no'  onClick={(e)=>setAgency(e.target.value)} /> <label htmlFor="no"> No</label>
        </div>
        <Button onClick={handleSignup} text='Create Account' className='mt-8 py-2 text-white' />
    </div>
  )
}

export default Signup