import React from 'react'
import './Skills.css'
import Skills_Data from '../../assets/Skills_Data'
import bt from '../../assets/bootstrap.svg'
import py from '../../assets/python.png'
import htm from '../../assets/html_img.png'
import reat from '../../assets/react_img.png'
import js from '../../assets/javascript.png'
import ja from '../../assets/java_img.png'
import an from '../../assets/android.png'
import fr from '../../assets/flutter_img.png'
import sql from '../../assets/sqlimg.png'


const Skills = () => {
  return (
    <skills>
      <div id='skills' className="container text-light text-center p-3">
        <h1 className='under-line skils'>Skills</h1>
        <div className='top'>
           <div className="grids-l">
          {
            Skills_Data.map((skils,index)=>{
              return  <div >
                  <div key={index} className=" d-box">
                  <img src={skils.s_img} alt="" className='set-img'/>
                  <p>{skils.s_name}</p>
                    </div>
                    </div>
              })
          }
          </div>
           
        </div>
      </div>
    </skills>
  )
}

export default Skills
