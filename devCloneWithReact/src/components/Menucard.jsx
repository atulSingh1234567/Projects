import React from 'react'
import { FcHome,FcIdea,FcLike,FcBusinessContact } from "react-icons/fc";
import { AiFillAudio,AiTwotoneVideoCamera,AiFillTag } from "react-icons/ai";
import menu from '../assets/dev-community-icon.png'
import guideImg from '../assets/icons8-open-book-60.png'
import emoji from '../assets/kisspng-emoji-thought-emoticon-smiley-sticker-thinking-5ac0e8d6d23fe4.4737760515225919588612.png'

export default function Menucard() {
  return (
    <div className='menu-card-div'>
    
       <ul className='menu-item-ul'>
        <li><span><FcHome/></span><p>Home</p></li>
        <li><span><AiFillAudio/></span><p>Podcasts</p></li>
        <li><span><AiTwotoneVideoCamera/></span><p>Videos</p></li>
        <li><span><AiFillTag/></span><p>Tags</p></li>
        <li><span><FcIdea/></span><p>FAQ</p></li>
        <li><span><FcLike/></span><p>Advertise on DEV</p></li>
        <li><span><img src={menu} alt="" className='menu-about-img' /></span><p>About</p></li>
        <li><span><FcBusinessContact/></span><p>Contact</p></li>
        <li><span><img src={guideImg} alt="" className='menu-icon-img' /></span><p>Guides</p></li>
        <li><span ><img src={emoji} alt=""  className='menu-icon-img'/></span><p>Software comparisons</p></li>
       </ul>

       
    </div>
  )
}
