import React from 'react'
import {NavLink} from 'react-router-dom'
export default function Home() {
  return (
    
    <div className='homePage-mid-section'>
        <ul>
            <NavLink className={({isActive}) => `${isActive? 'homePage-active-link': 'homePage-inactive-link'} homePage-link`} to='#'>Relevant</NavLink>
            <NavLink className={({isActive}) => `${isActive? 'homePage-active-link': 'homePage-inactive-link'} homePage-link`} to='#'>Latest</NavLink>
            <NavLink className={({isActive}) => `${isActive? 'homePage-active-link': 'homePage-inactive-link'} homePage-link`} to='#'>Top</NavLink>
        </ul>
    </div>
        
  )
}
