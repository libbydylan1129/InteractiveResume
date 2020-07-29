import React, {Component,} from 'react'

export default class TajHide extends Component{
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
        <div className="TajHideDiv" style={{
          backgroundColor: "#6CC4BB",
         height: "150px",
         width: "125px"}}>
        <h4 style={{ color: "black"}}> Responsibilites </h4>
        <ul className="TajHideUL">
        <li className="THLI1"> <p> Served Tables </p> </li>
        <li className="THLI2"> <p> Ran Exposition Part Time </p> </li>
        </ul>
        </div>
        : null
      }

      <img src={require("../Icons/taj-mahal (1).png")} onClick={() => this.operation()}
      style={{
        height: "75px",
      }}
      />
      </div>
    )
  }
}
