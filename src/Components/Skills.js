import React, {Component} from 'react'
import SkillBar from './SkillBar.js'
import SkillLevel from './SkillLevel.js'

export default class Skills extends Component{
  render(){
    return(
      <div className="SkillsPage" style={{
        backgroundColor: "",
        width: "550px",
        height: "400px",
      }}>
      <div className="TechnicalPage">
      <h2 className="TechnicalSkills">Technical</h2>

      <SkillBar text="HTML" spanSpecific="BarHTML" />
      <SkillBar text="CSS" spanSpecific="BarCSS" />
      <SkillBar text="JavaScript" spanSpecific="BarJavaScript"/>
      <SkillBar text="React" spanSpecific="BarReact"/>
      <SkillBar text="Node" spanSpecific="BarNode"/>
      <SkillLevel/>
      </div>

    

      <div className="AdditionalPage">
      <h2 className="AdditionalSkills"> Additional</h2>
      <SkillBar text="Microsoft Office" spanSpecific="BarMicroOffice"/>
      <SkillBar text="Draw.io" spanSpecific="BarDraw"/>
      <SkillBar text="ScreenCastify" spanSpecific="BarCastify"/>
      <SkillBar text="Github" spanSpecific="BarGit"/>
      <SkillLevel/>

      </div>
      </div>

    )
  }
}
