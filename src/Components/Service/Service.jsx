import React from 'react'
import Services_Data from '../../assets/service_data'
import './Service.css'
const Service = () => {
  return (
    <div>
        <div id='services' className="container p-3">
            <h1 className='under-line text-light text-center m-3'>My Services</h1>
            <div className="row row-col-3 p-3">
                {
                    Services_Data.map(
                        (service,index)=>{
                            return(
                            <div className='col '>
                               <div class="card cards" key={index}>
                                <img class="card-img-top im-set" src={service.s_img} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">{service.s_name}</h5>
                                        <p class="card-text">{service.s_dis}</p>
                                        <a href="#" class="btn btn-primary">Read more</a>
                                    </div>
                                </div>
                            </div>
                            );
                        }
                    )
                }
            </div>
        </div>


    </div>
  )
}

export default Service
