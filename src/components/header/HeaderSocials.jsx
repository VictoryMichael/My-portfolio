import React from 'react'
import {SiGithub} from "react-icons/si"
import {FaLinkedin} from "react-icons/fa"
import {BsTwitter} from "react-icons/bs"


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
       <a href="https://github.com/VictoryMichael" target="_blank" rel="noopener noreferrer"> <SiGithub /> </a>
       <a href="https://www.linkedin.com/in/victory-michael-8aa78122b/" target="_blank" rel="noopener noreferrer"> <FaLinkedin /> </a>
       <a href="https://twitter.com/Code1Victory" target="_blank" rel="noopener noreferrer"> <BsTwitter />  </a>
    </div>
  )
}

export default HeaderSocials

