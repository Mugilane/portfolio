import React from 'react'
import './Contact.css'
import phone from '../../assets/phone.svg'
import mail from '../../assets/mail.svg'
import location from '../../assets/location.svg'
import linkedin from '../../assets/linkedin.svg'

const Contact = () => {
    

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);


        formData.append("access_key", "efab8033-5a0d-4e2f-9eaa-d78eec8f7fcb");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };


  return (
    <div id='contact' className='container-fluid gape'>
        <div className="top-div">
            <h1 className='text-title'>Get in touch</h1>
        </div>
        <div className="container gape">
        <div className="contact-section row">
        <div className="contact-left col">
            <h1>Let's Talk</h1>
            <div className="detial">
            <div className="contact-detial">
                <img src={mail} alt="" /><p>mugilane.cse@gmail.com</p>

            </div>
            <div className="contact-detial">
                <img src={phone} alt="" /><p>+91 9360096656</p>
            </div>
            <div className="contact-detial">
                <img src={location} alt="" /><p>kombakkam, puducherry - 605110</p>
            </div>
            <div className="contact-detial">
                <img src={linkedin} alt="" /><a className='lin' href='https://www.linkedin.com/in/mugilane-sdm-82b193312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                >mugilane sdm</a>
            </div>
            </div>
        </div>
        <form className="contact-right col" onSubmit={onSubmit}>
            <label htmlFor="">your Name</label>
            <input type="text" placeholder='Enter your name' name='name'/>
            <label htmlFor="">Your mail</label>
            <input type="email" placeholder='enter your mail' name='mail' />
            <label htmlFor="">write your message</label>
            <textarea name="message"  rows="4" placeholder='enter your message'></textarea>
            <button type='submit' className="contact-submit">Submit Now</button>
        </form>
        </div>
    </div>
    </div>
  )
}

export default Contact