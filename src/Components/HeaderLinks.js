 import React, {Component} from 'react';
 import{
   Link
 } from 'react-router-dom'

 export default class HeaderLinks extends Component{
   render(){
     return(
       <ul style={{
         listStyleType: "none",
       }}
       className="HeaderLinks">
       <li>
       <img src={this.props.headerIMG} style={{
         height: '50px',
         width: '50px',
       }}/>
       <Link to={this.props.location}>
        <h3>{this.props.textLink}</h3>
        </Link>
       </li>
       </ul>
     )
   }
 }
