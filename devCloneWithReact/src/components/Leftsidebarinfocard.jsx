import React from 'react'
import { useHamburgerContext } from '../contexts/Mycontext'
import { Link } from 'react-router-dom'

export default function Leftsidebarinfocard() {
  const {showMenu} = useHamburgerContext()
  return (
    <div className={`leftside-info-card-div ${showMenu ? 'leftside-info-card-hamclicked' : 'leftside-info-card-hamnotclicked'}`}>
      <h3 className='leftside-info-card-heading'>DEV Commnity is a community of 1,182,817 amazing developers</h3>
      <p className='leftside-info-para'>We're a place where coders share, stay up-to-date and grow their careers.</p>
      <Link to="/create-account" className='leftsidebar-createacc-link'>Create account</Link>
      <Link to="/login" className='leftsidebar-login-link'>Log in</Link>
    </div>
  )
}
