import React from 'react'
import thumb from '../assets/thumbs-up-sign.svg'
import nerd from '../assets/nerd-face.svg'
import eyes from '../assets/Pngitem_283125.png'
import {BsTwitter , BsFacebook, BsInstagram, BsTwitch,BsGithub,BsMastodon} from 'react-icons/bs'

export default function OtherCardLeft() {
  return (
    <div className='menu-card-div'>
       <h3 className='leftside-info-card-heading'>Other</h3>
       <ul className='menu-item-ul'>
        <li><span><img src={thumb} alt="" className='menu-icon-img' /></span><p>Code of Conduct</p></li>
        <li><span><img src={nerd} alt="" className='menu-icon-img' /></span><p>Privacy Policy</p></li>
        <li><span><img src={eyes} alt="" className='menu-icon-img' /></span><p>Terms of use</p></li>
       </ul>

       <div className='other-card-social'>
        <a href="#"><BsTwitter/></a>
        <a href="#"><BsFacebook/></a>
        <a href="#"><BsGithub/></a>
        <a href="#"><BsInstagram/></a>
        <a href="#"><BsTwitch/></a>
        <a href="#"><BsMastodon/></a>
       </div>
    </div>

  )
}
