import React from 'react'
import './Skills.css'
import py_img from "../../assets/python.png"
import react_img from "../../assets/react_img.png"
import java_img from "../../assets/java_img.png"
import html_img from "../../assets/html_img.png"
import flutter_img from "../../assets/flutter_img.png"
import android_img from "../../assets/android.png"

const Skills = () => {
  return (
    <div id='skill' className='container top-div'>
        <div className="Skill-title">
            <h1>My Skills</h1>
        </div>
        <div className="detial top-div">
        <div className="skill-element">
          <img src={py_img} alt="" className='logo'/>
          <p>Python</p><hr style={{width:"80%"}}/></div><br />
        <div className="skill-element">
          <img src={java_img} alt="" className='logo left'/>
          <p>Java</p><hr style={{width:"60%"}}/></div><br />
        <div className="skill-element">
          <img src={react_img} alt="" className='logo' />
          <p>React js</p><hr style={{width:"50%"}}/></div><br />
        <div className="skill-element">
          <img src={html_img} alt="" className='logo'/>
          <p>HTML & CSS</p><hr style={{width:"80%"}}/></div><br />
        <div className="skill-element">
          <img src={android_img} alt="" className='logo' />
          <p>AndroidStudio</p><hr style={{width:"60%"}}/></div><br />
        <div className="skill-element">
          <img src={flutter_img} alt="" className='logo'/>
          <p>Flutter</p><hr style={{width:"50%"}}/></div>
          </div>
        </div>
  )
}

export default Skills