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
      <Row style={{paddingLeft: "40px"}}>
        <SocialMedia />
        <Col style={{display: "flex", alignItems:"flex-start", flexDirection: "column", height: "10vh"}} xl="4">
          <p style={{color: "white"}}>Testing</p>
          <p style={{color: "white"}}>Testing</p>
          <p style={{color: "white"}}>Testing</p>        
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