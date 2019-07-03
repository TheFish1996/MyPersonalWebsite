import '../styles/Navbar.css';
import React, {useState, useEffect} from "react";
import {
    Row,
    Col
  } from "reactstrap";
import {Link} from 'react-router-dom'

const logo = require("../img/Picture1.png")

  function NavBar(props){

    const [navRotate, setNavRotate] = useState(0)
    const [rectangleAnimation1, setRectangleAnimation1] = useState("shape");
    const [rectangleAnimation2, setRectangleAnimation2] = useState("shape");
    const [rectangleAnimation3, setRectangleAnimation3] = useState("shape");
    const {linksShow} = props

    let iconTitle = "fas fa-water fa-md titleIconContract noAnimation"
    let nameTitle = "titleContractIn noAnimation"
    let navRotateStyle = "navbarCollapse"

    if(navRotate === 0){
      navRotateStyle = "navbarCollapse"
    } else if(navRotate === 1){
      navRotateStyle = "navbarCollapse isActive"
    } else {
      navRotateStyle = "navbarCollapse isActive activeClick"
    }

    if(linksShow === "navbarLinksHidden"){
      iconTitle = "fas fa-water fa-md titleIconExpand"
    } else if(linksShow === "navbarLinks"){
      iconTitle = "fas fa-water fa-md titleIconContract"
    }

    if(linksShow === "navbarLinksHidden"){
      nameTitle = "titleContractOut"
    } else if(linksShow === "navbarLinks"){
      nameTitle = "titleContractIn"
    }

    function iconAnimationForward(){
      setNavRotate(1);
    }
    function iconAnimationBackward(){
      setNavRotate(0)
    }
    function iconFullAnimation(){
      setNavRotate(2);
    }
    function setNavAnimation(value){
      if(value === 1){
        setRectangleAnimation1("shape shapeAnimation")
      } else if(value === 2){
        setRectangleAnimation2("shape shapeAnimation")
      } else if(value === 3){
        setRectangleAnimation3("shape shapeAnimation")
      }
    }
    function setNavAnimationBack(value){
      if(value === 1){
        setRectangleAnimation1("shape")
      } else if(value === 2){
        setRectangleAnimation2("shape")
      } else if(value === 3){
        setRectangleAnimation3("shape")
      }
    }

      return (
        <Row className="sticky-top noAnimation">
          <Col className="navbarTitle sticky-top" style={{display: "flex", alignItems:"center"}} lg="7" xl="7">
            <i style={{color: "black", marginRight: "10px"}} className={iconTitle}></i>
            <p style={{marginRight: "5px "}} className={nameTitle}>Jonathan</p>
            <p className={nameTitle}>Fishkin</p>
          </Col>
          <Col className={linksShow} lg="4" xl="4">
            <div className="svg-wrap">
              <svg height="50" width="130" xmlns="http://www.w3.org/2000/svg">
                <text x="20" y="30">About Me</text>
                <rect className={rectangleAnimation1} onMouseEnter={() => {setNavAnimation(1)}} onMouseLeave={() => {setNavAnimationBack(1)}} onClick={() => {setNavAnimation(1)}} height="50" width="110" />
              </svg>
            </div>
            <div className="svg-wrap">
              <svg height="50" width="130" xmlns="http://www.w3.org/2000/svg">
                <text x="25" y="30">Projects</text>
                <rect className={rectangleAnimation2} onMouseEnter={() => {setNavAnimation(2)}} onMouseLeave={() => {setNavAnimationBack(2)}} onClick={() => {setNavAnimation(2)}} height="50" width="110" />
              </svg>
            </div>
            <div className="svg-wrap">
              <svg height="50" width="130" xmlns="http://www.w3.org/2000/svg">
                <text x="20" y="30">Experience</text>
                <rect className={rectangleAnimation3} onMouseEnter={() => {setNavAnimation(3)}} onMouseLeave={() => {setNavAnimationBack(3)}} onClick={() => {setNavAnimation(3)}} height="50" width="110" />
              </svg>
            </div>
          </Col>
          <Col className={navRotateStyle} onMouseEnter={iconAnimationForward} onMouseLeave={iconAnimationBackward} onClick={iconFullAnimation} lg="1" xl="1">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </Col>
        </Row>
      )
  }

  export default NavBar;