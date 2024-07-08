import React from 'react'
import './MyService.css'
import Services_Data from "../../assets/service_data"
const MyService = () => {
  return (
    <div id='service' className='container top-div'>
        <div className="service-div">
            <h1>My Services</h1>
        </div>
        <div className="service-detial top-div">
            {
                Services_Data.map((service,index)=>{
                    return <div key={index} className="service-list">
                        <h2>{service.s_no}</h2>
                        <h3>{service.s_name}</h3>
                        <p>{service.s_dis}</p>
                    </div>
                }

                )
            }
        </div>

    </div>
  )
}

export default MyService