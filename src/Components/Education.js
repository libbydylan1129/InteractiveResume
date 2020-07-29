import React, {Component} from 'react';
import Accordion from './Accordion.js'

export default class Education extends Component{
  render(){
    return(
      <div className="EducationPage"
      style={{
        backgroundColor: '#65DBA8',
        width: '500px',
        height: '400px'}}
      >
      <h1 className="EducationHeader"> Education </h1>
      <Accordion title=" Highschool" content="I graduated at the age of 16, finishing my senior year during the summer. I went to St Petersburg Highschool at the time, then graduated in two months from Florida Virtual School. "/>
      <Accordion title="Free Code Camp" content =" After highschool I decided to start learning how to code. I did this by using the free online courses on freeCodeCamp.org, finishing and gaining certification in thier HTML and CSS basic course and Javascript Course"/>
      </div>
    )
  }
}
