
import { Outlet } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import RelevantPage from './components/RelevantPage'
import RightSideBar from './components/RightSideBar'
import TheLeftSideBar from './components/TheLeftSideBar'
import {HamburgerContextProv} from './contexts/Mycontext.js'
import { useState } from 'react'

function App() {
  
  const [showMenu , setShowMenu] = useState(false);

  const hamClick = ()=>{
    setShowMenu(true)
  }
  
  const closeHamMenu = ()=>{
    setShowMenu(false)
  }
 
  return (
    <HamburgerContextProv value={{showMenu , hamClick , closeHamMenu}}>
    <div className= {`outer-main-container ${showMenu ? 'ham-is-clicked' : 'outer-main-container'}`}>
    <Navbar />
    <div className='homePage'>
       <TheLeftSideBar/>
       <div className='mid-main-div'>
       <Home/>
       {/* <RelevantPage /> */}
       <Outlet/>
       </div>
       <RightSideBar/>
    </div>
    </div>
     
    </HamburgerContextProv>
  )
}

export default App
