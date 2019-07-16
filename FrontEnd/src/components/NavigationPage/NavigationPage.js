import '../../styles/NavigationPage/NavigationPage.css';
import '../../styles/Rain.css';
import React, {useState} from "react";
import NavbarNavigation from '../Navbars/NavbarNavigation'
import SocialMedia from './SocialMedia'
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

  let rainArray = [];
  for(let i = 0; i < 149; i++){
    rainArray.push(<div key={i} className="rain"></div>)
  }

  return (
    <div style={{height: "100vh"}}>
      <div className="rainMask">
        {rainArray}
      </div>
      <NavbarNavigation linksShow={"navbarLinks"} />
      <Row style={{marginLeft: "40px"}}>
        <SocialMedia />
        <Col style={{height: "10vh"}} xl="4">
          <Row>
            <p style={{color: "white", fontSize: "80px", height: "70px", fontWeight: "bold"}}>ABOUT ME</p>
          </Row>
          <Row>
            <p style={{color: "white", fontSize: "80px", height: "70px", fontWeight: "bold"}}>PROJECTS</p>
          </Row>
          <Row>
            <p style={{color: "white", fontSize: "80px", height: "70px", fontWeight: "bold"}}>EXPERIENCE</p>
          </Row>
          <Row>
            <p style={{color: "white", fontSize: "80px", height: "70px", fontWeight: "bold"}}>CONTACT</p>
          </Row>     
        </Col>
        <Col style={{height: "10vh"}} xl="3">
          <Row>
            <p className="text-focus-in" style={{color: "#57d6ff", fontSize: "40px", height: "50px", fontWeight: "bold", paddingLeft: "300px"}}>?</p>
          </Row>
          <Row>
            <p className="text-focus-in" style={{color: "#57d6ff", fontSize: "40px", height: "50px", fontWeight: "bold", paddingLeft: "200px"}}>I</p>
          </Row> 
          <Row>
            <p className="text-focus-in" style={{color: "#57d6ff", fontSize: "40px", height: "50px", fontWeight: "bold", paddingLeft: "400px"}}>M</p>
          </Row> 
          <Row>
            <p className="text-focus-in" style={{color: "#57d6ff", fontSize: "40px", height: "50px", fontWeight: "bold", paddingLeft: "700px"}}>A</p>
          </Row>
          <Row>
            <p className="text-focus-in" style={{color: "#282828", fontSize: "40px", height: "50px", fontWeight: "bold", paddingLeft: "300px"}}>O</p>
          </Row>
          <Row>
            <p className="text-focus-in" style={{color: "#282828", fontSize: "40px", height: "50px", fontWeight: "bold"}}>W</p>
          </Row>
          <Row>
            <p className="text-focus-in" style={{color: "#282828", fontSize: "40px", height: "50px", fontWeight: "bold", paddingLeft: "200px"}}>H</p>
          </Row>           
        </Col>
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