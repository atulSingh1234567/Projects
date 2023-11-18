import React,{useEffect, useState} from 'react'
import {FormSection , StatutaryInfo , FooterSection} from './CreateAccComp'
export default function LoginComp() {
  const [checked , setChecked] = useState(true);
  const [Email , setEmail] = useState('')
  const [Pass , setPass] = useState('')
  const remember = ()=>{
    setChecked(prev => !prev)
  }
   
  
  const aboutInfo = ()=>{
    if(checked){
      localStorage.setItem(Email , Pass)
    }
    else{
      console.log('login clicked')
    }
  }

  return (
    <div className='create-acc-main-div'>
      <FormSection />
      <div className='my-8 flex justify-center items-center gap-2 w-1/2 '>
        <div className='w-full h-0 border border-grey-300'></div>
        <span className='font-thin text-sm'>OR</span>
        <div className='w-full h-0 border border-grey-300'></div>
      </div>

      <div className='flex  flex-col gap-4 w-5/12 login-page-input'>
        <label htmlFor="email">Email</label>
        <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} value={Email} className='w-full rounded-lg border-2 border-grey-900 h-10 focus:outline-none focus:border-blue-800 hover:border-3 hover:border-grey-950 px-4' />
        <label htmlFor="password">Password</label>
        <input type="password" onChange={(e) => setPass(e.target.value) } name='password' className='w-full rounded-lg border-2 border-grey-900 h-10 focus:outline-none focus:border-blue-800 hover:border-3 hover:border-grey-900 px-4'/>
      </div>

      <div className='flex justify-between w-5/12 my-2 login-page-input'>
        <div className='flex gap-2 items-center'>
        <input type="checkbox" name='remember' checked = {checked} onChange={remember} value={checked} className='w-4 h-4 rounded-md' />
        <label htmlFor="remember" className='text-black font-light'>Remember me</label>
        </div>
        <a href="#" className='text-blue-500 font-thin'>Forgot Password?</a>
      </div>

      <button className='bg-blue-800 w-5/12 text-white rounded-md h-11 mt-5 login-page-input' onClick={aboutInfo}>log in</button>


      <StatutaryInfo/>
      <div className='w-5/12 h-0 border border-grey-500 mt-5'></div>
      <FooterSection action='Create account' actionlink='create-account' info='New to DEV Community?'/>
    </div>
  )
}
