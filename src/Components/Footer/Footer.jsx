import React from "react";
import './Footer.css'
import footer_logo from '../../assets/logo.jpeg'
import user_icon from '../../assets/user_icon.jpg'
const Footer = () =>{
  return(
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt=""/>
                <p>Thanks for stopping by! I’m Bhumika Das, a Fullstack Developer and BCA student specializing in frontend design. Excited to connect and explore new opportunities!</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt=""></img>
                    <input type ='email' placeholder="Enter you emai"/>


                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">2024 Bhumika Das. All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p> Privacy policy </p>
                <p>Connect with me</p>
            </div>
        </div>
     

    </div>
  )
  

}
export default Footer
