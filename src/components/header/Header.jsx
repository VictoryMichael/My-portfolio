import React from 'react'
import "./Header.css"
import CTA from './CTA'
import ME from "../../assest/me.png"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
       <div className='container header__container'>
          <h5> <span id='hello'>👋</span>  Hello I'm</h5>
           <h1>VICTORY MICHAEL</h1>
           <h5 className='text-light'>Frontend Developer</h5>
            <CTA />
            <HeaderSocials />

              <div className='me'>
                 <img src={ME} alt="" />
              </div>

               <a href="#contact" className='scroll__down'>Scroll Down</a>

       </div>
    </header>



        
    
  )
}

export default Header