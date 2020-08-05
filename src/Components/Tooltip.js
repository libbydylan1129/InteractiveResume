 import React, {Component,} from 'react'
 import ReactTooltip from 'react-tooltip'

 export default class Tooltip extends Component{
   render(){
     return(
       <div>
       <img src={this.props.icon} data-tip={this.props.text} onClick={() => {
         ReactTooltip.hide(this.fooRef)
       }} className={this.props.cName}/>
       <ReactTooltip/>
       </div>
     )
   }
 }
