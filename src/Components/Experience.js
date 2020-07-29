import React, {Component} from 'react';
import AwardHide from './AwardHide.js'
import TajHide from './TajHide.js'
import BurgerHide from  './BurgerHide.js'

export default class Experience extends Component{
  render(){
    return(
      <div className="ExperiencePage"
      style={{
        width: '500px',
        height: '375px'
      }}
      >
      <h1 className="ExperienceHeader">Experience</h1>
      <ul className="ULExperience">
      <li className="ImgListXPOne"> <AwardHide/> <p className="AwardCaptionXP">Dec. 2017 ----------- Aug. 2018</p> </li>
     <li className="LineOneListXP">  <hr className="OneExperienceLine"/> </li>
     <li className=" ImgListXPTwo"> <TajHide/> <p className="TajMahalCaptionXP">Dec. 2018 ----------- Aug. 2019</p> </li>
     <li> <hr className="TwoExperienceLine"/>  </li>
     <li> <BurgerHide/>
 <p className="BurgerCaptionXP">Sep. 2019 ----------- April 2020</p>  </li>
      </ul>
      </div>
    )
  }
}
