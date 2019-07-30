import '../../styles/Navbars/Navbar.css';
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

  function NavBar(props){

    const [navRotate, setNavRotate] = useState({
      value: 0,
      stayFixed: false
    })

    const [rectangleAnimation1, setRectangleAnimation1] = useState("shape");
    const [rectangleAnimation2, setRectangleAnimation2] = useState("shape");
    const [rectangleAnimation3, setRectangleAnimation3] = useState("shape");
    const {linksShow, showNavigationPage, setCanvasElements} = props

    useEffect(() => {
      if(navRotate.stayFixed === true){
        showNavigationPage();
      }
    }, [navRotate.stayFixed])

    let iconTitle = "fas fa-water fa-md titleIconContract noAnimation"
    let nameTitle = "titleContractIn noAnimation"
    let navRotateStyle = "navbarCollapse"

    if(navRotate.value === 0 && navRotate.stayFixed === false){
      navRotateStyle = "navbarCollapse"
    } else if(navRotate.value === 1 && navRotate.stayFixed === false){
      navRotateStyle = "navbarCollapse isActive"
    } else {
      navRotateStyle = "navbarCollapse isActive activeClick"
      setTimeout(() => {
        setNavRotate({
          value: 0,
          stayFixed: false
        })
      }, 2500)
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

    //Animates the menu navigatio forward
    function iconAnimationForward(){
      setNavRotate(state => ({
        ...state,
        value: 1,
      }));
    }

    //Animated the menu navigatio backward
    function iconAnimationBackward(){
      setNavRotate(state => ({
        ...state,
        value: 0,
      }));
    }
    //Animates the full menu navigation on click
    function iconFullAnimation(){
      setNavRotate(state => ({
        value: 2,
        stayFixed: !state.stayFixed
      }));
    }

    //Sets the animation for the actual navigation elements and removes animation for animal to lower cpu usage
    function setNavAnimation(value){
      setCanvasElements(false)
      if(value === 1){
        setRectangleAnimation1("shape shapeAnimation")
      } else if(value === 2){
        setRectangleAnimation2("shape shapeAnimation")
      } else if(value === 3){
        setRectangleAnimation3("shape shapeAnimation")
      }
    }

  //Sets the animation for the actual navigation elements and adds animation for animal back
    function setNavAnimationBack(value){
      setTimeout(() => {
        setCanvasElements(true)
      }, 700)
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
                <text fill="black" x="25" y="30">Projects</text>
                <rect className={rectangleAnimation1} onMouseEnter={() => {setNavAnimation(1)}} onMouseLeave={() => {setNavAnimationBack(1)}} onClick={() => {setNavAnimation(1)}} height="50" width="110" />
              </svg>
            </div>
            <div className="svg-wrap">
              <svg height="50" width="130" xmlns="http://www.w3.org/2000/svg">
                <text fill="black" x="20" y="30">Experience</text>
                <rect className={rectangleAnimation2} onMouseEnter={() => {setNavAnimation(2)}} onMouseLeave={() => {setNavAnimationBack(2)}} onClick={() => {setNavAnimation(2)}} height="50" width="110" />
              </svg>
            </div>
            <div className="svg-wrap">
              <svg height="50" width="130" xmlns="http://www.w3.org/2000/svg">
                <text fill="black" x="25" y="30">Contact</text>
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
  )(NavBar);