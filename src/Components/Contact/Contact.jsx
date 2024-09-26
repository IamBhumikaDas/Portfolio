import React from "react";
import './Contact.css'
import theam_pattern from '../../assets/theam_pattern_main.png'
import mail_icon from '../../assets/mail_icon.jpg'
import location_icon from '../../assets/location_icon.png'
import call_icon from '../../assets/call_icon.jpg'
const Contact = () =>{
      

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "68a824da-9317-4e74-9d58-dde69e80ccee");
    
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
          alert(res.message)
        }
      };

  return(
    <div id="contact" className="contact">
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theam_pattern} alt=""/>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Got feedback on my work or a new idea to discuss? I’m all ears!</p>


<div className="contact-details">
    <div className="contact-detail">
<img src={mail_icon} alt="" /><p>dbhumika@gmail.com</p>
    </div>
    <div className="contact-detail">
        <img src={call_icon} alt=""/><p>8617295772</p>
        
        </div>
        <div className="contact-detail">
            <img src={location_icon} alt=""/><p>16/jogen banerjee road Naihati , pin_743165,west-Bengal,India</p>
        
        </div>
</div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your name</label>
                <input type="text"  placeholder="Enter your name" name="name"/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder="Enter your email" name="email"/>
                <label htmlFor="Write your message here"/>
                <textarea name="messeage" rows='8' placeholder="enter your message" />
                <button type="submit"className="contact-submit">Submit now</button>

            </form>
        </div>
     


    </div>
  )
  

}
export default Contact
