import React from 'react'
import project_data from '../../assets/project_data'

const Project = () => {
  return (
    <div id='projects' className='container lt text-light p-3 gap-3'>
       <h1 className='under-line m-5'>My Projects</h1> 
       <div className='grids'>
       {
        project_data.map((project,index)=>{
            return   <div key={index} className="lists m-3 p-3">
           <h3>Project Name: {project.p_name}</h3>
           <h5>Technology: {project.p_tech}</h5>
           <h6>Timeline: {project.p_date}</h6>
           <p>Discription:{project.p_dis}</p>
       </div> 
        })
       }
     </div>
    </div>
  )
}

export default Project
