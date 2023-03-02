import React from 'react'
import './footer.css'
import {FaGithub,FaInstagram,FaFacebook,FaLinkedin,FaWhatsapp} from "react-icons/fa"
export default function footer() {
  return (
    <div id='footer'>
        <div className="up">
          <FaGithub className='icons github'/>
          <FaInstagram className='icons instagram'/>
          <FaLinkedin className='icons linkedin'/>
          <FaFacebook className='icons facebook'/>
          <FaWhatsapp className='icons whatsapp'/>
        </div>
        <div className="bottom">
            <p>© 2023 Copyright: Made by SANIN</p>
        </div>
    </div>
  )
}

