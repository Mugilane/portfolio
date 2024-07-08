import React from 'react'
import './Header.css'
import pro_img from '../../assets/prof_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => {
  const pdf_link = 'https://drive.google.com/file/d/1kd8lZlNSh-k9mdnQ2a4893adk3sz6_l3/view?usp=drive_link';
  return (
    <div id='home' className='header container'>
        <img src={pro_img} alt="" className='pro-img mx-auto d-block'/>
        <h1 className='mx-auto'><span>I'm Mugilane,</span> Software Developer based in india</h1>
        <p className='mx-auto'>I am Fresher for seeking software developer role</p>
        <div className="header-action mx-auto">
            <div className="hire-action" onClick={()=> setMenu("contact")}>
            <AnchorLink className='anchor-link' offset={50} href="#contact">
              Hire Me</AnchorLink>
              </div>
            <div className="resume" >
            <a className='div-btn' href="https://drive.google.com/file/d/1kd8lZlNSh-k9mdnQ2a4893adk3sz6_l3/view?usp=drive_link">
            My Resume/CV</a></div>
        </div>
    </div>
  )
}

export default Header