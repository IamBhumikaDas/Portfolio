import React from "react";
import './About.css'
import  theam_pattern from '../../assets/theam_pattern.jpg'
import profile_img from '../../assets/Untitled.png'

const About = () =>{
  return(
    <div id='about'className="about">
      <div className="about-tytle">
        <h1>About</h1>
        <img src={theam_pattern} alt=""/>
      </div>
      <div className="about-selection">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
<div className="about-right">
  <div className="about-para">
    <p>Hi, I'm Bhumika Das , a full-stack developer and BCA student at Techno India Hooghly College. Passionate about building scalable web applications, I specialize in HTML, CSS , Javascript etc . Explore my portfolio to see my projects and skills in action </p>
    <p> I'm Bhumika Das a passionate full-stack developer and a third-year BCA student at Techno India Hooghly College. With a keen interest in building innovative solutions, I've developed expertise in crafting scalable, efficient, and visually appealing web applications. As a full-stack enthusiast, I enjoy working on both front-end and back-end technologies, leveraging my skills in  HTML, CSS, JavaScript, React, Node.js, MongoDB, etc.</p>
  </div>
  <div className="about-skills">
    <div className="about-skill"><p>HTML & CSS </p><hr style={{width:"70%"}}></hr></div>
    <div className="about-skill"><p>React JS </p><hr style={{width:"50%"}}></hr></div>
    <div className="about-skill"><p>Javascript </p><hr style={{width:"60%"}}></hr></div>
    <div className="about-skill"><p>Node JS</p><hr style={{width:"50%"}}></hr></div>
    <div className="about-skill"><p>MongoDB </p><hr style={{width:"50%"}}></hr></div>
  </div>
</div>
      </div>
      <div className="about-achievements">
        <hr/>
        <div className="about-achievement">
          <h1>Fresher</h1>
          <p>YEARS OF EXPERIENCE </p>
        </div>
        <hr/>
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED </p>
        </div>
        <hr />
      </div>
    </div>
  )
  

}
export default About
