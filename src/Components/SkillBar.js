import React, {Component} from 'react'


export default class SkillBar extends Component{
  render(){
    return(
      <div className="skillBarDiv">
      <ul className="BarUl">
       <li>
       <h3> {this.props.text} </h3><span className="bar"><span className={this.props.spanSpecific}></span></span>
       </li>
      </ul>
      </div>
    )
  }
}
