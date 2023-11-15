import React from 'react'
import { FaApple } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { BsEnvelopeFill } from "react-icons/bs";
import Button from './SmallCompToUse';
import logo from '../assets/dev-community-icon.png'
import { Link } from 'react-router-dom';

export const FormSection = ()=>{
  return (
    <>
      <h1><img src={logo} alt="" className='w-14 mb-8' /></h1>
      <div className='create-acc-header-div text-center'>
      <h1 className='create-acc-heading text-3xl'>Join the DEV Community</h1>
      <p className='create-acc-para mb-10 font-thin text-sm leading-1'>DEV Community is a community of 1,182,817 amazing developers</p>
      </div>
      <div className='create-acc-div gap-4'>
         <Button name='Apple' icon={<FaApple/>}/>
         <Button name='Forem' icon={<AiFillGithub />} />
         <Button name='Twitter' icon={<IoLogoTwitter />} />
         <Button name='Email' icon={<BsEnvelopeFill />} />
      </div>
    </>
  )
}

export const FooterSection = (props)=>{

  return (
    <>
    <span className='font-thin tracking-wide mt-16'>{props.info}<Link to={`/${props.actionlink}`} className='text-blue-700 px-1'>{props.action}</Link></span>
    </>
  )

}

export const StatutaryInfo = ()=>{
  return (
    <i className='font-thin text-xs w-21 tracking-wide mt-8 text-center'>By signing up, you are agreeing to our <i className='text-blue-700'>privacy policy</i>,<i className='text-blue-700'>terms of use</i>, and <i className='text-blue-700'>code of conduct</i>.</i>
  )
}

export default function CreateAccComp() {
    return (
      <div className='create-acc-main-div'>
        <FormSection />
        <StatutaryInfo/>
        <FooterSection action='Log in' actionlink= 'login' info = 'Already have an account?'/>
      </div>
    )
}
