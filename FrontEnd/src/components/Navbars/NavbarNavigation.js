import '../../styles/Navbars/NavbarNavigation.css';
import React, {useState, useEffect} from "react";
import {
    Row,
    Col
  } from "reactstrap";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {showNavigationPage} from '../../actions/showingNavigationElement'


const mapDispatchToProps = (dispatch) => {
  return {
    showNavigationPage: () => dispatch(showNavigationPage())
  }
}

  function NavBarNavigation(props){

    const [navRotate, setNavRotate] = useState({
      value: 0,
      stayFixed: false
    })

    const [rectangleAnimation1, setRectangleAnimation1] = useState("navbarNavigationshape");
    const [rectangleAnimation2, setRectangleAnimation2] = useState("navbarNavigationshape");
    const [rectangleAnimation3, setRectangleAnimation3] = useState("navbarNavigationshape");
    const {linksShow, showNavigationPage} = props

    useEffect(() => {
      if(navRotate.stayFixed === true){
        showNavigationPage();
      }
    }, [navRotate.stayFixed])

    let iconTitle = "fas fa-water fa-md navbarNavigationtitleIconContract noAnimation"
    let nameTitle = "navbarNavigationtitleContractIn noAnimation"
    let navRotateStyle = "navbarNavigationCollapse"

    if(navRotate.value === 0 && navRotate.stayFixed === false){
      navRotateStyle = "navbarNavigationCollapse"
    } else if(navRotate.value === 1 && navRotate.stayFixed === false){
      navRotateStyle = "navbarNavigationCollapse navbarNavigationisActive"
    } else {
      navRotateStyle = "navbarNavigationCollapse navbarNavigationisActive navbarNavigationactiveClick"
    }

    if(linksShow === "navbarLinksHidden"){
      iconTitle = "fas fa-water fa-md navbarNavigationtitleIconExpand"
    } else if(linksShow === "navbarLinks"){
      iconTitle = "fas fa-water fa-md navbarNavigationtitleIconContract"
    }

    if(linksShow === "navbarLinksHidden"){
      nameTitle = "navbarNavigationtitleContractOut"
    } else if(linksShow === "navbarLinks"){
      nameTitle = "navbarNavigationtitleContractIn"
    }

    function iconAnimationForward(){
      setNavRotate(state => ({
        ...state,
        value: 1,
      }));
    }
    function iconAnimationBackward(){
      setNavRotate(state => ({
        ...state,
        value: 0,
      }));
    }
    function iconFullAnimation(){
      setNavRotate(state => ({
        value: 2,
        stayFixed: !state.stayFixed
      }));
    }

    function setNavAnimation(value){
      if(value === 1){
        setRectangleAnimation1("navbarNavigationshape navbarNavigationshapeAnimation")
      } else if(value === 2){
        setRectangleAnimation2("navbarNavigationshape navbarNavigationshapeAnimation")
      } else if(value === 3){
        setRectangleAnimation3("navbarNavigationshape navbarNavigationshapeAnimation")
      }
    }

    function setNavAnimationBack(value){
      if(value === 1){
        setRectangleAnimation1("navbarNavigationshape")
      } else if(value === 2){
        setRectangleAnimation2("navbarNavigationshape")
      } else if(value === 3){
        setRectangleAnimation3("navbarNavigationshape")
      }
    }

      return (
        <Row  style={{paddingLeft: "80px"}} className="sticky-top noAnimation">
          <Col className="navbarNavigationTitle sticky-top" style={{display: "flex", alignItems:"center"}} lg="7" xl="7">
            <i style={{color: "white", marginRight: "10px"}} className={iconTitle}></i>
            <p style={{marginRight: "5px "}} className={nameTitle}>Jonathan</p>
            <p className={nameTitle}>Fishkin</p>
          </Col>
          <Col className={linksShow} lg="4" xl="4">
            <div className="navbarNavigationsvg-wrap">
              <svg height="50" width="130" xmlns="http://www.w3.org/2000/svg">
                <text fill="white" x="20" y="30">About Me</text>
                <rect className={rectangleAnimation1} onMouseEnter={() => {setNavAnimation(1)}} onMouseLeave={() => {setNavAnimationBack(1)}} onClick={() => {setNavAnimation(1)}} height="50" width="110" />
              </svg>
            </div>
            <div className="navbarNavigationsvg-wrap">
              <svg height="50" width="130" xmlns="http://www.w3.org/2000/svg">
                <text fill="white" x="25" y="30">Projects</text>
                <rect className={rectangleAnimation2} onMouseEnter={() => {setNavAnimation(2)}} onMouseLeave={() => {setNavAnimationBack(2)}} onClick={() => {setNavAnimation(2)}} height="50" width="110" />
              </svg>
            </div>
            <div className="navbarNavigationsvg-wrap">
              <svg height="50" width="130" xmlns="http://www.w3.org/2000/svg">
                <text fill="white" x="20" y="30">Experience</text>
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

  export default connect(
    null,
    mapDispatchToProps
  )(NavBarNavigation);