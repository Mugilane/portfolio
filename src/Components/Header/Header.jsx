import React from 'react'
import logo from '../../assets/prof_img.jpg'
import bt from '../../assets/bootstrap.svg'
import py from '../../assets/python.png'
import htm from '../../assets/html_img.png'
import reat from '../../assets/react_img.png'
import js from '../../assets/javascript.png'
import ja from '../../assets/java_img.png'
import an from '../../assets/android.png'
import fr from '../../assets/flutter_img.png'
import sql from '../../assets/sqlimg.png'
import './Header.css';

const Header = () => {
  return (
    <header id='home' className='container-fluid'>

      <div id="carouselExampleControls" class="carousel slide text-light" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="d-flex flex-row justify-content-between">
                <div className='content m-5 '>
                <h2 className='name'>I'm Mugilane,</h2>
                <h2 className='name-d'>B.Tech Computer Science Engineering <br/>
                 Student at Pondicherry University</h2>
                <p className=''>I am Fresher for seeking Web application and Andorid
                  Application developer role. I have a knowledeg for python, SQL, Java, 
                  C# and Dot Net related roles are sutable for me.</p>

                <div className="header-action m-5">
                    <div className="hire-action" >
                      Hire Me
                      </div>
                    <div className="resume" >
                    <a className='div-btn' href="https://github.com/Mugilane/mugilane-portfolio/raw/main/public/MUGILANE%20CV-RESUME%20updated.pdf">
                    My Resume/CV</a></div>
                    </div>
                
                  <div>
                  <h1>Service</h1>
                  <div className='d-flex flex-row gap-5 p-3'>
                    <img src={htm} alt="" className='sk-img'/>
                     <img src={reat} alt="" className='sk-img' />
                     <img src={an} alt=""  className='sk-img'/>
                     <img src={fr} alt="" className='sk-img' />
                     <img src={sql} alt="" className='sk-img' />
                  </div>
                  </div>
                </div>
                  <img src={logo} class="d-block image" alt="" />
                </div>
               </div>
         
             <div class="carousel-item">
                <div className="d-flex flex-row justify-content-between">
                <div className='content m-5 '>
                <h2 className='name'>I'm Mugilane,</h2>
                <h2 className='name-d'>B.Tech Computer Science Engineering <br/>
                 Student at Pondicherry University</h2>
                <p className=''>I am Fresher for seeking Web application and Andorid
                  Application developer role. I have a knowledeg for python, SQL, Java, 
                  C# and Dot Net related roles are sutable for me.</p>

                <div className="header-action m-5">
                    <div className="hire-action" >
                      Hire Me
                      </div>
                    <div className="resume" >
                    <a className='div-btn' href="https://github.com/Mugilane/mugilane-portfolio/raw/main/public/MUGILANE%20CV-RESUME%20updated.pdf">
                    My Resume/CV</a></div>
                </div>
                <div>
                  <h1>Service</h1>
                  <div className='d-flex flex-row gap-5 p-3'>
                    <img src={htm} alt="" className='sk-img'/>
                     <img src={reat} alt="" className='sk-img' />
                     <img src={an} alt=""  className='sk-img'/>
                     <img src={fr} alt="" className='sk-img' />
                     <img src={sql} alt="" className='sk-img' />
                  </div>
                  </div>
                </div>
                <img src={logo} class="d-block image" alt="" />
                </div>
               </div>

          </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
       </div>
      
    </header>
  )
}

export default Header
