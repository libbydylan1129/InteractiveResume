import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import HeaderLinks from './HeaderLinks.js'

export default class Header extends Component{
  render(){
    return(
      <header class="container">
      <div className="HeaderDiv">
      <h1 className="Headerh1">Dylan Libby Resume</h1>
<div className="TopRightHeader">
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
</div>
<ul className="HeaderLinksUL">
<HeaderLinks headerIMG={require('../Icons/home2.png')} location="/" textLink="Home"/>
<HeaderLinks headerIMG={require('../Icons/businessman.png')} location="/AboutMe" textLink="Profile"/>
<HeaderLinks headerIMG={require('../Icons/prize.png')} location="/Skills" textLink="Skills"/>
<HeaderLinks headerIMG={require('../Icons/exam.png')} location="/Education" textLink="Education"/>
<HeaderLinks headerIMG={require('../Icons/code.png')} location="/Experience" textLink="Experience"/>
</ul>
      </div>
      </header>
    )
  }
}
