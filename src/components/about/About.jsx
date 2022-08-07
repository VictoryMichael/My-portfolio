import React from 'react'
import "./About.css"
import {SiAdobeindesign} from "react-icons/si";
import {VscRootFolderOpened} from "react-icons/vsc";
import {CgUserlane} from "react-icons/cg";









const About = () => {
  return (
    <section id='about'>
      <h5>you get to know me</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
         <div className='about__me'>
            <div className='about__me-image'>
               <img src="https://filmdaily.co/wp-content/uploads/2022/04/Code-lede.jpeg" alt="AboutMe Img" />
            </div>
         </div>

            <div className='about__content'>
               <div className='about__cards'>
                   <article className='about__card'>
                       <SiAdobeindesign className='about-icon' />
                      <h5>Design</h5>
                      <small> clean mordern designs</small>
                   </article>

                   <article className='about__card'>
                       <VscRootFolderOpened className='about-icon'  />
                      <h5>Projects</h5>
                      <small>30+ Completed</small>
                   </article>

                   <article className='about__card'>
                       <CgUserlane className='about-icon'  />
                      <h5>Clients</h5>
                      <small>10+ satisfied</small>
                   </article>
               </div> 

               <p>
               Motivated front-end developer who brings a creative and solution-driven mindset to every team
and project. passionate about writing clean code that is reusable and follows DRY principles.
design interface that incorporates accessibility and user-friendliness. approach all new projects
with the priority of simplicity and functionality
               </p>
                <a href="#contact" className='btn btn-primary'>Let's Connect</a>
            </div>

      </div>


      
      


    </section>
  )
}

export default About