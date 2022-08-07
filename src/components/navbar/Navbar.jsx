import React, {useState} from 'react'
import "./Navbar.css"
import {AiOutlineHome} from "react-icons/ai"
import {RiUserHeartLine} from "react-icons/ri"
import {MdOutlineMarkEmailUnread,MdOutlineWorkOutline} from "react-icons/md"
import {FaTools} from "react-icons/fa"



const Navbar = () => {
const [activeNav,setActiveNav] = useState ('#')
  return (
   <nav> 
       <a href="#" onClick={() => setActiveNav('#')}  className = {activeNav === '#' ? "active" : ''}   ><AiOutlineHome /></a>
       <a href="#about" onClick={() => setActiveNav('#about')}  className = {activeNav === '#about' ? "active" : ''}     > <RiUserHeartLine /></a>
       <a href="#experience"  onClick={() => setActiveNav('#experience')}  className = {activeNav === '#experience' ? "active" : ''}  ><FaTools /></a>
       <a href="#portfolio"   onClick={() => setActiveNav('#portfolio')}  className = {activeNav === '#portfolio' ? "active" : ''} ><MdOutlineWorkOutline /></a>
       <a href="#contact"   onClick={() => setActiveNav('#contact')}  className = {activeNav === '#contact' ? "active" : ''}><MdOutlineMarkEmailUnread /></a>



   </nav>
  )
}

export default Navbar