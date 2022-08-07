import React from 'react'
import './Portfolio.css'
import img1 from "../../assest/ever-clean.png";
import img2 from "../../assest/stayfit-gym.png";
import img3 from "../../assest/weather-app.png";
import img4 from "../../assest/note app.png";

const data =[
{  
    id:1,
   image: img2 ,
  title: "Stay-Fit Excercise App" ,
  github: "https://github.com/VictoryMichael",
  demo: "https://illustrious-douhua-ac3e6e.netlify.app/",
},

{  
  id:2,
 image:img1 ,
title: "Ever-Clean Service" ,
github: "https://github.com/VictoryMichael/Ever-Clean-cleaning-service",
demo: "https://delicate-biscuit-715a00.netlify.app/",
},

{  
  id:3,
 image:img4 ,
title: "I-Note Book" ,
github: "https://github.com/VictoryMichael/React-Note-App",
demo: "https://heartfelt-mandazi-165b54.netlify.app",
},

{  
  id:4,
 image: img3,
title: "GO Weather" ,
github: "https://github.com/VictoryMichael",
demo: "https://resplendent-mooncake-4fb755.netlify.app/",
},





]




const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent  Work</h5>
      <h2>Portfolio</h2>

        <div className='container portfolio__container'>
          {
            data.map(({id, image, title, github, demo}) => {
              return(
                <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={image} alt={title} />
                </div>
                 <h3>{title}</h3>
                 <div className="portfolio__item-cta">
                 <a href={github} target="_blank" rel="noopener noreferrer"  className='btn'>GitHub</a>
                  <a href={demo} target="_blank"  className='btn btn-primary'  rel="noopener noreferrer"> Live Demo</a>
                 </div>
              </article>
              )
            })
          }


            </div>

    </section>
  )
}

export default Portfolio