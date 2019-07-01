import React, {useState, useEffect} from "react";
import {
    Row,
    Col
  } from "reactstrap";
import {Link} from 'react-router-dom'

const logo = require("../img/Picture1.png")

  function NavBar(props){

    const [navRotate, setNavRotate] = useState(0)
    const {linksShow} = props
    let navRotateStyle = "navbarCollapse"
    if(navRotate === 0){
      navRotateStyle = "navbarCollapse"
    } else if(navRotate === 1){
      navRotateStyle = "navbarCollapse isActive"
    } else {
      navRotateStyle = "navbarCollapse isActive activeClick"
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

      return (
        <Row className="sticky-top">
          <Col className="navbarTitle sticky-top" style={{display: "flex", alignItems:"center"}} lg="7" xl="7">
            <p><img style={{marginRight: "10px"}} height="65px" width="65px" src={logo}></img>Jonathan Fishkin</p>
          </Col>
          <Col className={linksShow} lg="4" xl="4">
            <p>About Me</p>
            <p>Projects</p>
            <p>Job Experience</p>
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