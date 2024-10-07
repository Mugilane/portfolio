import React from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Navbar = () => {
  return (
    <div  className=' d-flex flex-row justify-content-center sticky-top m-3'>
      <nav className='navbar d-flex flex-row w-100 h-100 justify-content-around text-light'>
        <h1>PORTFOLIO</h1>
     
        <div className='d-flex menu flex-row align-items-center'>
        <AnchorLink className='anchor-link' offset={50} href="#home">
         <h4>Home</h4>
         </AnchorLink>
          <AnchorLink className='anchor-link' offset={50} href="#about"> <h4>About Me</h4></AnchorLink>
        
          <AnchorLink className='anchor-link' offset={50} href="#skills"><h4>Skills</h4></AnchorLink>
         
          <AnchorLink className='anchor-link' offset={50} href="#services"><h4>My Services</h4></AnchorLink>
         
          <AnchorLink className='anchor-link' offset={50} href="#projects"><h4>My Projects</h4></AnchorLink>
         
          <AnchorLink className='anchor-link' offset={50} href="#contact"><h4>Contact</h4></AnchorLink>
         
        </div>
        <div className="hire-act" >
           <AnchorLink className='anchor-link' offset={50} href="#contact"><a href="">Hire Me</a></AnchorLink>
          
        </div>
       
      </nav>
    </div>
  )
}

export default Navbar
