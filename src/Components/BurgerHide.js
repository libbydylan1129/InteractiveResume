import React, {Component,} from 'react'

export default class BurgerHide extends Component{
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
        <div className="BurgerHideDiv"
        style={{
          backgroundColor: "#6CC4BB",
          height: "150px",
          width: "125px"
        }}
        >
        <h4 style={{ color: "black"}}> Responsibilites </h4>
        <ul className="BurgerHideUL">
        <li className="BHLI1"> <p> Served Tables </p> </li>
        <li className="BHLI2"> <p> Open/Closed Resturant </p> </li>
        </ul>
        </div>
        : null
      }

      <img src={require("../Icons/burger.png")} onClick={() => this.operation()}
      style={{
        height: "75px",
      }}
      />
      </div>
    )
  }
}
