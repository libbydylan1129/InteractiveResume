import React, {Component} from 'react';
import {Link} from 'react-router-dom'


export default class Home extends Component {
  render(){
    return(
      <body className="IntroBody">
      <div className="IntroPage"
      style={{
        backgroundColor: '#65DBA8',
        width: '500px',
        height: '300px'
      }}
      >
      <h1 className="IntroHeader">
      Introduction
      </h1>

      <p className="IntroParagraph">
      Hello! this is a resume made in order to display the
      knowledge and skill I currently have. The project will go over
      things to know about me, goals, education, and
      experience of mine. Along with this there will be a link to the GitHub repository
      that contains the code written for this project.
      </p>


      </div>
      </body>
    )
  }
}
