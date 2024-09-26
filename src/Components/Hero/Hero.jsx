import React from "react";
import Profile_img from '../../assets/Profile_img.jpg'
import './Hero.css'
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero= () =>{
  return(
    <div id="home" className="hero">
      <img src={Profile_img} alt=""/>
      <h1><span>I am Bhumika Das,</span> Fullstack Developper based in India.</h1>
      <p>I am Fullstack Developer . My Strength is Frontend . Till now I learned HTML, CSS, Javascript, React.js, MongoDB, Node.js, Rest API etc</p>
<div className="hero-action">
    <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
    <div className="hero-resume">My Resume</div>
</div>
    </div>
  )
  

}
export default Hero
