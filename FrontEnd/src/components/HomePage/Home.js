import '../../styles/Home.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import AnimatedText from './AnimatedText'
import NavBar from '../Navbars/Navbar'
import NavigationPage from '../NavigationPage/NavigationPage'
import NewsCarousel from './NewsCarousel'
import {connect} from 'react-redux'
import {
  Fade, 
  Container, 
  Row, 
  Col, 
} from 'reactstrap'
import {getAllNews} from '../../config/data'
const pdf = require("../../img/Resume.pdf")

const mapStateToProps = (state) => {
  return {
    showNavigationPage: state.showingNavigationElements.showNavBarPage
  }
}

function Home(props){

  const {showNavigationPage} = props
  const [newsData, setNewsData] = useState([])
  const [linksShow, setLinksShow] = useState("navbarLinks noAnimation")
  const [navbarAnimation, showNavbarAnimation] = useState({
    containerElement: "homePage",
    navigationPageElement: "displayHide",
    elementsShown: ""
  })

  //  useEffect(() => {
  //     const response = async () => {
  //       let result = await getAllNews();
  //       setNewsData(result.articles)
  //     }
  //     response();
  //  }, [])

   useEffect(() => {
     if(showNavigationPage === true){

       //First we want to animate the main container page with all the elements and fade out all elements of homepage
       showNavbarAnimation((state) => ({
          ...state,
          containerElement: "homePage animate_content",
          elementsShown: "fadeOutHomePageElements"
       }))

       //We then set a timeout to make the new navigationpage appear and hide the current elements on the screen
       setTimeout(() => {
          showNavbarAnimation((state) => ({
            ...state,
            containerElement: "navigationPage animate_content",
            elementsShown: "displayHide",
            navigationPageElement: "displayShow"
          }))
       }, 1500)

       //Then we set the container element to have no animation class attached to it, so we can reannimate again
       setTimeout(() => {
         showNavbarAnimation((state) => ({
           ...state,
          containerElement: "navigationPage"
         }))
       }, 3000)

     } else if(showNavigationPage === false && navbarAnimation.containerElement === "navigationPage") {
       //We only want to trigger this when the navigationpage is false and the actual container is on the navigation page, to avoid animation on load
       showNavbarAnimation((state) => ({
        ...state,
        containerElement: "navigationPage animate_content",
      }))

        setTimeout(() => {
          showNavbarAnimation((state) => ({
            ...state,
            containerElement: "homePage animate_content",
            elementsShown: "displayShow",
            navigationPageElement: "displayHide"
          }))
        }, 1500)

        setTimeout(() => {
          showNavbarAnimation((state) => ({
            ...state,
            containerElement: "homePage"
          }))
        }, 3000)

        
     }
   }, [showNavigationPage])

    function test(e){
      const scrollAmount  = e.srcElement.scrollTop
      if(scrollAmount >= 80){
        setLinksShow("navbarLinksHidden")
      } else if(scrollAmount <=80) {
        setLinksShow("navbarLinks")
      } 
    }

  return (
    <div>
      <Container onScroll={(e)=>{e.target.addEventListener("scroll", test)}} fluid className={"navigationPage"}>
        <div className={"displayShow"}>
          <NavigationPage />
        </div>
        <div className={"displayHide"}>
          <NavBar linksShow={linksShow} />
          <Row className="newsHomePage">
            <Col xs="11" sm="8" md="7" lg="3" xl="3" className="newsHomePageCarousel">
              <NewsCarousel newsData={newsData} />
            </Col>
          </Row>
          <Row className="animatedText">
            <Col>
              <AnimatedText />
            </Col>
          </Row>
          <Row className="iconsHomePage">
            <Col xs= "2" md="2" lg="2" xl="2">
              <a target="_blank" href="https://www.linkedin.com/in/jonathan-fishkin-966737160/"><i className="fab fa-linkedin"></i></a>
            </Col>
            <Col xs= "2" md="2" lg="2">
              <a target="_blank" href="https://github.com/TheFish1996"><i className="fab fa-github"></i></a>
            </Col>
            <Col xs= "2" md="2" lg="2" xl="2">
              <a target="_blank" href={pdf}><i className="far fa-file-alt"></i></a>
            </Col>
            <Col xs= "2" md="2" lg="2" xl="2">
              <a target="_blank" href={pdf}><i className="far fa-envelope"></i></a>
            </Col>
          </Row>
          <Row>
            <p>Placeholder</p>
          </Row>
          <Row>
            <p>Placeholder</p>
          </Row>
          <Row>
            <p>Placeholder</p>
          </Row>
          <Row>
            <p>Placeholder</p>
          </Row>
          <Row>
          <p>Placeholder</p>
        </Row>
        <Row>
          <p>Placeholder</p>
        </Row>
        <Row>
          <p>Placeholder</p>
        </Row>
        <Row>
          <p>Placeholder</p>
        </Row>
        <Row>
        <p>Placeholder</p>
      </Row>
      <Row>
        <p>Placeholder</p>
      </Row>
      <Row>
        <p>Placeholder</p>
      </Row>
      <Row>
        <p>Placeholder</p>
      </Row>
        </div>
      </Container>
    </div>
  )
}

export default connect(
  mapStateToProps,
  null
)(Home);