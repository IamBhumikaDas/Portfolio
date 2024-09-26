import React from "react";
import './MyWork.css';
import theam_pattern from '../../assets/theam_pattern_main.png'
import mywork_data from '../../assets/my_work_data.js'
import arrow_icon from '../../assets/arro.png'

const MyWork = () =>{
  return(
    <div id="work" className="mywork">
        <div className="mywork-title">
            <h1>My Latest  Work</h1>
            <img src={theam_pattern} alt="" />
        </div>
        <div className="mywork-container">
          {mywork_data.map((work,index)=>{
            return <img key={index} src={work.w_img} alt=""/>
          })}

            
        </div>
        <div className="mywork-showmore">
          <p>Show more</p>
          <img src={arrow_icon} alt="" />
         

        </div>
      


    </div>
  )
  

}

export default MyWork
