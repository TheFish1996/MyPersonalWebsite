import '../../styles/NavigationPage.css';
import '../../styles/Rain.css';
import React, {useState, useEffect} from "react";
import NavbarNavigation from '../Navbars/NavbarNavigation'
import {
    Row,
    Col,
    Container
  } from "reactstrap";
import {Link} from 'react-router-dom'

const wavesFront = require("../../img/waves-front.svg")
const wavesRear = require("../../img/waves-rear.svg")
const paperBoat = require("../../img/paperboat.svg")
const github = require("../../img/github.svg")
const githubreverse = require("../../img/githubreverse.svg")
const pdf = require("../../img/Resume.pdf")

function NavigationPage(props){

  const [githubAnimation, setgithubAnimation] = useState("")

  let rainArray = [];
  for(let i = 0; i < 149; i++){
    rainArray.push(<div key={i} className="rain"></div>)
  }

  function creategithubAnimation(val){
    if(val === 1) setgithubAnimation("navigationPageGithubForward")

    if(val === 2){
      setgithubAnimation("navigationPageGithubBack")
      setTimeout(() => {
        setgithubAnimation("")
      }, 150)
    }

  }

  return (
    <div style={{height: "100vh"}}>
      <div className="rainMask">
        {rainArray}
      </div>
      <NavbarNavigation linksShow={"navbarLinks"} />
      <Row style={{paddingLeft: "80px"}}>
        <Col className={"navigationPageSocialMedia"} xl="4">
          <div onMouseEnter={() => {creategithubAnimation(1)}} onMouseLeave={() => {creategithubAnimation(2)}} className="navigationPageGithub">
            <a target="_blank" href="https://github.com/TheFish1996">
              <svg width="100px" height="100px">
                <circle className={githubAnimation}cx="50px" cy="50px" r="2px" />
                <image xlinkHref={githubAnimation === "" ? github : githubreverse} fill="white" x="37px" y="38px"  height="25px" width="25px"/>
              </svg>
            </a>
          </div>
          <a style={{marginBottom: "25px"}} target="_blank" href="https://www.linkedin.com/in/jonathan-fishkin-966737160/"><i className="fab fa-linkedin"></i></a>
          <a style={{marginBottom: "25px"}} target="_blank" href={pdf}><i className="far fa-file-alt"></i></a>
          <a target="_blank" href={pdf}><i className="far fa-envelope"></i></a>      
        </Col>
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