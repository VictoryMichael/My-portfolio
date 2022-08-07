import React from 'react'
import "./Experience.css"
import {BsPatchCheckFill} from "react-icons/bs"


const Experience = () => {
  return (
   <section id='experience'>
      <h5>What Skills I Have</h5>
        <h2>My Experience</h2>

          <div className='container experience__container'>
             <div className='experience__frontend'>
                <h3>Frontend Development</h3>
                  <div className='experience__content'>
                     <article>
                        <BsPatchCheckFill className='experience__detail-icon' />
                        <div>
                        <h4>HTML</h4>
                         <small>Experienced</small>
                        </div>
                     </article>

                     <article>
                        <BsPatchCheckFill  className='experience__detail-icon'/>
                        <div>
                        <h4>Css/sass</h4>
                         <small>Experienced</small>
                        </div>
                     </article>

                     <article>
                        <BsPatchCheckFill className='experience__detail-icon' />
                          <d>
                          <h4>JavaScript</h4>
                         <small>Experienced</small>
                          </d>
                     </article>

                     <article>
                        <BsPatchCheckFill  className='experience__detail-icon'/>
                          <div>
                          <h4>React</h4>
                         <small>Intermediate</small>
                          </div>
                     </article>

                     <article>
                        <BsPatchCheckFill className='experience__detail-icon' />
                         <div>
                         <h4>Git</h4>
                         <small>Experienced</small>
                         </div>
                     </article>

                
                     <article>
                        <BsPatchCheckFill className='experience__detail-icon' />
                         <div>
                         <h4>Node.js</h4>
                         <small>Intermediate</small>
                         </div>
                     </article>
                  </div>
             </div>



        <div className='experience__cms'>

    
        <h3>Content Management Systems</h3>
                  <div className='experience__content'>
                     <article>
                        <BsPatchCheckFill className='experience__detail-icon' />
                        <di>
                        <h4>Widget Customization</h4>
                         <small>Intermedate</small>
                        </di>
                     </article>

                     <article>
                        <BsPatchCheckFill className='experience__detail-icon' />
                          <div>
                          <h4>Web Design</h4>
                         <small>Experienced</small>
                          </div>
                     </article>

                     <article>
                        <BsPatchCheckFill className='experience__detail-icon' />
                        <div>
                        <h4>Content Management Tools</h4>
                         <small>Basic</small>
                        </div>
                     </article>

                     <article>
                        <BsPatchCheckFill className='experience__detail-icon' />
                        <div>
                        <h4>Responsive Design</h4>
                         <small>Experienced</small>
                        </div>
                     </article>


                     <article>
                        <BsPatchCheckFill className='experience__detail-icon' />
                        <div>
                        <h4>Testing/Debugging </h4>
                         <small>Intermediate</small>
                        </div>
                     </article>
                  </div>



        </div>


          </div>





   </section>
  )
}

export default Experience