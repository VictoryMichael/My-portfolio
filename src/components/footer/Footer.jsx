import React from 'react'
import "./Footer.css"
import {SiGithub} from "react-icons/si"
import {FaLinkedin} from "react-icons/fa"
import {BsTwitter} from "react-icons/bs"
import Logo from "../../assest/footer logo.png"





const Footer = () => {
  return (
   <footer>
      <a href="#" className='footer__logo'> <img  src={Logo} alt="f-logo" />  </a>
   
   <ul className='permalinks'>
    <li><a href="#">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#contact">Contact</a></li>
   </ul>

<div className='footer__social'>
     <a href="https://github.com/VictoryMichael" target="_blank" rel="noopener noreferrer"> <SiGithub /> </a>
       <a href="https://www.linkedin.com/in/victory-michael-8aa78122b/" target="_blank" rel="noopener noreferrer"> <FaLinkedin /> </a>
       <a href="https://twitter.com/Code1Victory" target="_blank" rel="noopener noreferrer"> <BsTwitter />  </a>
</div>

<div className='footer__copyright'>
  <small>@Victory Michael. All rights reserverd.</small>
</div>

   </footer>
  )
}

export default Footer