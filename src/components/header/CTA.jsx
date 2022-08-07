import React from 'react'
import cv from "../../assest/cv.pdf"
import "./Header.css"
import {AiOutlineDownload} from "react-icons/ai"


function CTA() {
  return (
    <div className='cta'>
       <a href={cv} target="_blank" rel="noopener noreferrer" download className='btn'> Download CV <AiOutlineDownload  fontSize="1em"/> </a>
        <a href="#contact" className='btn btn-primary'>let's talk</a>
    </div>
  )
}

export default CTA