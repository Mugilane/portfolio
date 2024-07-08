import React, { useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Navbar = () => {

  return (
    <div className='nav-div'> 
      <nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand colur name" href="#">MUGILANE PORTFOLIO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse menu" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 cen-menu">
        <li class="nav-item cen-menu-li">
        <AnchorLink className='anchor-link' offset={50} href="#home">
          <a class="nav-link colur">Home</a>
        </AnchorLink>
        </li>
        <li class="nav-item cen-menu-li">
        <AnchorLink className='anchor-link' offset={50} href="#about">
          <a class="nav-link colur" >About Me</a>
          </AnchorLink>
        </li>   
        <li class="nav-item cen-menu-li">
        <AnchorLink className='anchor-link' offset={50} href="#skill">
          <a class="nav-link colur" >Skills</a>
          </AnchorLink>
        </li>        
        <li class="nav-item cen-menu-li">
        <AnchorLink className='anchor-link' offset={50} href="#service">
          <a class="nav-link colur"  >My Service</a>
          </AnchorLink>
        </li>  
        <li class="nav-item cen-menu-li">
        <AnchorLink className='anchor-link' offset={50} href="#contact">
          <a class="nav-link colur" >Contact</a>
          </AnchorLink>
        </li>    
      </ul>
    </div>
    <div className="hire-action hidan" onClick={()=> setMenu("contact")}>
            <AnchorLink className='anchor-link' offset={50} href="#contact">
              Hire Me</AnchorLink>
              </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar