import React from 'react'
import { CreateAccButton, LoginButton } from './Navbar'
import { useHamburgerContext } from '../contexts/Mycontext'

export default function Leftsidebarinfocard() {
  const {showMenu} = useHamburgerContext()
  return (
    <div className={`leftside-info-card-div ${showMenu ? 'leftside-info-card-hamclicked' : 'leftside-info-card-hamnotclicked'}`}>
      <h3 className='leftside-info-card-heading'>DEV Commnity is a community of 1,182,817 amazing developers</h3>
      <p className='leftside-info-para'>We're a place where coders share, stay up-to-date and grow their careers.</p>
      <a href="#" className='leftsidebar-createacc-link'>Create account</a>
      <a href="#" className='leftsidebar-login-link'>Log in</a>
    </div>
  )
}
