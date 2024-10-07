import React from 'react'
import './About.css'
import prof_img from '../../assets/work.jpg'
const About = () => {
  return (
    <div id='about' className='container-fluid text-light'>
        <div className="about-title">
            <h1 className='under-line'>About Me</h1>
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
                <div className="education">
                    <h1>Education</h1>
                    <h4>Christ College of Engineering and technology, puducherry.</h4>
                    <p>2020-2024 batch</p>
                    <p>B.tech - Computer science and Engineering</p>
                    <h6>CGPA - 8.53</h6>
                </div>

            </div>
            </div>
        </div>

    </div>
  )
}

export default About