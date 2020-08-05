import React, {Component} from 'react';
import Tooltip from './Tooltip.js'

export default class Experience extends Component{
  render(){
    return(
      <div className="ExperiencePage"
      style={{
        width: '700px',
        height: '375px'
      }}>
      <div className="XPDiv">
      <Tooltip icon={require('../Icons/award.png')} text=
      " 1.Assembled Trophies 2.Used lazer printers 3. Steam printed designes"
      cName="Trophy"/>
      <Tooltip icon={require('../Icons/taj-mahal (1).png')} text=
      "1. Served/Bussed Tables 2.Ran exposition "
      cName="TajM"/>
      <Tooltip icon={require('../Icons/burger.png')} text=
      "1. Served/Bussed tables 2. Open/Closed alone 3.Host"
      cName="Burger"/>
      </div>
      <div className="TextXPDIV">
      <ul className="XPHeader">
      <h3 className="Olympic"> Olympic Trophy</h3>
      <h3 className="Gateway"> Gateway to India </h3>
      <h3 className="Jefe"> El Jefe Burger Shack </h3>
      </ul>
      <ul className="XPDates">
      <p className="OlympicDates"> April 2017 - Aug. 2018 </p>
      <p className="GatewayDates"> Dec. 2018 - July 2019 </p>
      <p className="JefeDates"> August 2019 - April 2020</p>
      </ul>
      </div>

      </div>
    )
  }
}
