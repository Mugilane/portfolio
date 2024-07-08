import React from 'react'
import './About.css'
import prof_img from '../../assets/prof_img.jpg'
const About = () => {
  return (
    <div id='about' className='container-fluid'>
        <div className="about-title">
            <h1>About Me</h1>
        </div>
        <div className="container con-div">
            <div className="row">
            <div className="col-4 mob-img">
                <img src={prof_img} alt="" className='prof-img'/>
            </div>
            <div className="col">
                <div className="content-para">
                    <p>&emsp;&emsp;Aspiring Computer Science Student with 
                        keen interest on software developer with using my 
                        own initiative and flexible in my approach to work 
                        duties. Am smart worker, reliable and excellent 
                        time keeper. then have a knowledge for basic 
                        knowledge of app development and capacity to 
                        easy upgrade my self.</p>
                        
                </div>

            </div>
            </div>
        </div>

    </div>
  )
}

export default About