import '../styles/NavigationPage.css';
import React, {useState, useEffect} from "react";
import NavbarNavigation from './Navbars/NavbarNavigation'
import {
    Row,
    Col,
    Container
  } from "reactstrap";
import {Link} from 'react-router-dom'

const wavesFront = require("../img/waves-front.svg")
const wavesRear = require("../img/waves-rear.svg")
const paperBoat = require("../img/paperboat.svg")

function NavigationPage(props){
  return (
    <div>
      <NavbarNavigation linksShow={"navbarLinks"} />
      <Row>
        <p>Testing</p>
      </Row>
      <Row>
        <p>Testing</p>
      </Row>
      <Row>
        <p>Testing</p>
      </Row>
      <Row>
        <p>Testing</p>
      </Row>
      <Row>
        <p>Testing</p>
      </Row>
      <Row>
        <div class="ocean">
          <div class="boat-animation">
            <img alt="Wellen" src={wavesRear} class="waves waves--rear"></img>
            <div class="paperboat">
              <div class="paperboat__sink">
                <img alt="PaperBoat" width="110" height="71" src={paperBoat} class="paperboat__boat" id="paperboat" ></img>
              </div>
            </div>
            <img alt="Wellen" src={wavesFront} class="waves waves--front"></img>
          </div>
        </div>
      </Row>
    </div>
  )
}


export default NavigationPage;