import React from 'react'
import {NavLink} from 'react-router-dom'
export default function Home() {
  return (
    
    <div className='homePage-mid-section'>
        <ul>
            <NavLink className={({isActive}) => `${isActive? 'font-bold': 'font-thin'} hover:text-blue-800`} to=''>Relevant</NavLink>
            <NavLink className={({isActive}) => `${isActive? 'font-bold': 'font-thin'} hover:text-blue-800`} to='/latest'>Latest</NavLink>
            <NavLink className={({isActive}) => `${isActive? 'font-bold': 'font-thin'} hover:text-blue-800`} to='/top'>Top</NavLink>
        </ul>
    </div>
        
  )
}
