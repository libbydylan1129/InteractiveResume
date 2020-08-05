import React, {Component} from 'react'

export default class SkillLevel extends Component{
  render(){
    return(
      <ul className="LevelUL">
      <li className="LevelBeginner"> Beginner</li>
      <li className="LevelIntermediate"> Intermediate</li>
      <li className="LevelAdvanced"> Advanced </li>
      <li className="LevelExpert"> Expert </li>
      </ul>
    )
  }
}
