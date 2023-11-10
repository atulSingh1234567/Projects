import React, { useState } from 'react'
import logo from '../assets/dev-community-icon.svg'
import searchIcon from '../assets/icons8-search-50.png'
import hamBurgerIcon from '../assets/icons8-hamburger-menu-50.png'
import { useHamburgerContext } from '../contexts/Mycontext'

export function LoginButton(){
  return (
    <a href="#" className='navbar-login-link'>Log in</a>
  )
}

export function CreateAccButton(){
   return(
    <a href="#" className='navbar-createacc-link'>Create account</a>
   )
}

export default function Navbar() {
  const {hamClick} = useHamburgerContext()
  return (

    <nav className='navbar-div'>
      <div className='navbar-logo-search-div'>
        <div className='hamburger-menu'>
          <button className='hamburger-link' onClick={hamClick}><img src={hamBurgerIcon} alt="" className='hamburger-img'/></button>
        </div>
        <img src={logo} alt="Dev Community" className='navbar-logo-img' />
        <div className='navbar-left-section'>
          <input type="text" placeholder='Search...' className='navbar-input-search' />
          <button className='navbar-search-button'><img src={searchIcon} alt="icon" className='search-btn-img' /></button>
        </div>
      </div>

      <div className='navbar-login-div'>
      <button className='navbar-login-search-button'><img src={searchIcon} alt="icon" className='search-btn-img' /></button>
        <a href="#" className='navbar-login-link'>Log in</a>
        <a href="#" className='navbar-createacc-link'>Create account</a>
      </div>
    </nav>

  )
}
