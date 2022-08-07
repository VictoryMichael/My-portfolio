import React from 'react'
import "./Contact.css"
import {MdContactMail} from "react-icons/md"
import {GrSend} from "react-icons/gr"
import {ImWhatsapp} from "react-icons/im"



import emailjs from "emailjs-com"
import  { useRef } from 'react';


const Contact = () => {

const form = useRef()

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_j4smm6c', 'template_ekwq2pl', form.current, 'Dx3GD0ouo4tXP64Sr')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
};


  return (
    <section  id='contact'>
      <h5>Get In Touch</h5>
       <h2>Contact Me</h2>

       <div className='container contact__container' >
          <div className='contact__options'>
                <article className='contact__option'>
                    <MdContactMail />
                   <h4>Email</h4>
                   <h5>devvictory9@gmail.com</h5>
                   <a href="mailto:devvictory9@gmail.com" target="_blank" rel="noopener noreferrer">Leave a message <GrSend /></a>
                </article>

                <article className='contact__option'>
                    <ImWhatsapp />
                   <h4>Whatsapp</h4>
                   <h5>+2347040186280</h5>
                   <a href="https://api.whatsapp.com/send?phone=+2347040186280" target="_blank" rel="noopener noreferrer">Leave a message <GrSend /></a>
                </article>
          </div>
 
         <form ref={form} onSubmit={sendEmail}>
               <input type="text"  name='name' placeholder='Your Full Name' required/>
               <input type="email"  name='email' placeholder='Your Email' required/>
               <textarea name="message" placeholder='Your Message' rows="7" required></textarea> 
               <button className='btn btn-primary' type='submit' value="Send"  >Send</button>      
         </form>
         
       </div>
   </section>
  )
}

export default Contact