 import React, {Component,} from 'react'

 export default class AwardHide extends Component{
   constructor(){
     super()
     this.state={
       showMe: false
     }
   }
   operation(){
     this.setState({
       showMe: ! this.state.showMe
     })

   }
   render(){
     return(
       <div>
       {
         this.state.showMe ?
         <div className="AwardHideDiv"
         style={{
           backgroundColor: "#6CC4BB",
           height: "150px",
           width: "125px"
         }}
         >
         <h4 style ={{ color: "black"}}>Responsibilities</h4>
         <ul className="AwardHideUL">
         <li className="AHLI1"> <p> Assemble Trophies </p> </li>
         <li className="AHLI2"> <p> Usage of Lazer Printer </p> </li>
         </ul>
         </div>
         : null
       }

       <img src={require("../Icons/award.png")} onClick={() => this.operation()}
       style={{
         height: "75px",
       }}
       />
       </div>
     )
   }
 }
