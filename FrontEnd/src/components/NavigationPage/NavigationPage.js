import '../../styles/NavigationPage/NavigationPage.css';
import '../../styles/NavigationPage/Rain.css';
import React, {useState} from "react";
import NavbarNavigation from '../Navbars/NavbarNavigation'
import SocialMedia from './SocialMedia'
import Content from './Content'
import {
    Row,
    Col,
    Container
  } from "reactstrap";
import {Link} from 'react-router-dom'

const wavesFront = require("../../img/waves-front.svg")
const wavesRear = require("../../img/waves-rear.svg")
const paperBoat = require("../../img/paperboat.svg")

function NavigationPage(props){

  const [contentObject, setContentObject] = useState("")

  let rainArray = [];
  for(let i = 0; i < 149; i++){
    rainArray.push(<div key={i} className="rain"></div>)
  }

  function contentObjectSelector(contentObject){
    setContentObject(contentObject)
  }

  return (
    <div style={{height: "100vh"}}>
      <div className="rainMask" style={{display: "block"}}>
        {rainArray}
      </div>
      <NavbarNavigation linksShow={"navbarLinks"} />
      <Row style={{marginLeft: "40px"}}>
        <SocialMedia />
        <Col className="navigationLinksContent" xl="4">
          <Row>
            <p onMouseEnter={() => {contentObjectSelector("aboutme")}} onMouseLeave={() => {contentObjectSelector("")}} style={contentObject === "aboutme" ? {opacity: "0.5"} : {}}>
            ABOUT ME
            </p>
            { contentObject === "aboutme" &&
            <i class="fas fa-anchor" style={{fontSize: "25px", verticalAlign: "top", paddingTop: "20px", color: "#57d6ff"}}></i>
            }
          </Row>
          <Row>
            <p onMouseEnter={() => {contentObjectSelector("projects")}} onMouseLeave={() => {contentObjectSelector("")}} style={contentObject === "projects" ? {opacity: "0.5"} : {}}>
            PROJECTS</p>
            { contentObject === "projects" &&
            <i class="fas fa-anchor" style={{fontSize: "25px", verticalAlign: "top", paddingTop: "20px", color: "#57d6ff"}}></i>
            }
          </Row>
          <Row>
            <p onMouseEnter={() => {contentObjectSelector("experience")}} onMouseLeave={() => {contentObjectSelector("")}} style={contentObject === "experience" ? {opacity: "0.5"} : {}}>
            EXPERIENCE</p>
            { contentObject === "experience" &&
            <i class="fas fa-anchor" style={{fontSize: "25px", verticalAlign: "top", paddingTop: "20px", color: "#57d6ff"}}></i>
            }
          </Row>
          <Row>
            <p onMouseEnter={() => {contentObjectSelector("contact")}} onMouseLeave={() => {contentObjectSelector("")}} style={contentObject === "contact" ? {opacity: "0.5"} : {}}>
            CONTACT</p>
            { contentObject === "contact" &&
            <i class="fas fa-anchor" style={{fontSize: "25px", verticalAlign: "top", paddingTop: "20px", color: "#57d6ff"}}></i>
            }
          </Row>     
        </Col>
        <Content contentObject={contentObject} />
      </Row>
      <Row>
        <div className="ocean">
          <div className="boat-animation">
            <img alt="Wellen" src={wavesRear} className="waves waves--rear"></img>
            <div className="paperboat">
              <div className="paperboat__sink">
                <img alt="PaperBoat" width="110" height="71" src={paperBoat} className="paperboat__boat" id="paperboat" ></img>
              </div>
            </div>
            <img alt="Wellen" src={wavesFront} className="waves waves--front"></img>
          </div>
        </div>
      </Row>
    </div>
  )
}


export default NavigationPage;