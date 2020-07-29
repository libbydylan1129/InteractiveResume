import React, {useState, useRef} from 'react'
import Chevron from './Chevron.js'

function Accordion(props){

  const [setActive, setActiveState]= useState("");
  const [setHeight, setHeightState]= useState("0px")
  const [setRotate, setRotateState] = useState("accordion_icon")

  const content =useRef(null);

  function toggleAccordion() {
  setActiveState(setActive === "" ? "active" : "")
  setHeightState(setActive === "active"? "0px" : `${content.current.scrollHeight}px`)
  setRotateState(setActive === "active" ? "accordion_icon" : "accordion_icon rotate")
  }

  return(
    <div className="AccordionPage">
    <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
    <p classname="AccordionTitle">{props.title} </p>
    <Chevron width={10} fill={"#777"} className={`${setRotate}`}/>
    </button>
    <div ref={content} style={{maxHeight: `${setHeight}`}} className="AccordionContent">
    <div className="AccordionText"
    dangerouslySetInnerHTML={{__html: props.content }}/>
    </div>
    </div>
  )
}



export default Accordion;
