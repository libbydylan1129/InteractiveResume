import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component{
  render(){
    return(
      <div className="HeaderDiv"
      style={{
        width: '100%',
        height: '100px',
        backgroundColor: '#6CC4BB',
      }}
      >

      <h1 className="Headerh1">Dylan Libby Resume</h1>

<img src={require("../Icons/search.png")} className="HeaderSearch"
style={{
  height: '25px',
  width: '25px',
}}
/>


<img src={require("../Icons/settings.png")} className="HeaderSettings"
style={{
  width: '25px',
  height: '25px',
}}
/>

      <ul className="HeaderLinks">

      <li className="HomeList">
      <img src={require("../Icons/home2.png")}
      style={{
        height: '50px',
        width: '50px',
      }}
      className="HomeIcon"
      />
      <Link to="/">
      <h3 className="HeaderHome">Home</h3>
      </Link>
      </li>

      <li className="AboutMeList">
      <img src={require("../Icons/businessman.png")}
      style={{
        height: '50px',
        width: '50px',
      }}
      className="ProfileIcon"
      />
      <Link to ="/AboutMe">
      <h3 className="HeaderAboutMe">Profile</h3>
      </Link>
      </li>

      <li className="ObjectivesList">
      <img src={require("../Icons/prize.png")}
      style={{
        height: '45px',
        width: '50px',
      }}
      className="SkillsIcon"
      />
      <Link to="/Skills">
      <h3 className="HeaderSkills">Skills</h3>
      </Link>
      </li>

      <li className="EducationList">
      <img src={require("../Icons/exam.png")}
      style={{
        height: '50px',
        width: '50px',
      }}
      className="EducationIcon"
      />
      <Link to="/Education">
      <h3 className="HeaderEducation">Education</h3>
      </Link>
      </li>

      <li className="ExperienceList">
      <img src={require("../Icons/code.png")}
      style={{
        height: '50px',
        width: '50px',
      }}
      className="CodeIcon"
      />
      <Link to="/Experience">
      <h3 className="HeaderExperience">Experience</h3>
      </Link>
      </li>

      </ul>
      </div>
    )
  }
}
