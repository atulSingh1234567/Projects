import React from 'react'
import Leftsidebarinfocard from './Leftsidebarinfocard'
import Menucard from './Menucard'
import OtherCardLeft from './OtherCardLeft'
import { useHamburgerContext } from '../contexts/Mycontext'
import { AiOutlineClose } from "react-icons/ai";

export default function TheLeftSideBar() {
  
  const {showMenu , closeHamMenu} = useHamburgerContext();
  console.log(showMenu)
  
  
  return (
    
    
      <div className={`leftsidebar-div ${showMenu? 'ham-button-clicked' : 'leftsidebar-div'}`}>
        <div className={`${showMenu? 'hamafter-effect' : 'hambefore-effect'}`}>
          <h3>Dev Community</h3>
          <button onClick={closeHamMenu}><AiOutlineClose /></button>
        </div>
        <Leftsidebarinfocard />
        <Menucard />
        <OtherCardLeft/>
      </div>
    
  )
}
