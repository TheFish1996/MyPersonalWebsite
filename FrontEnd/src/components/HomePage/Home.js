import '../../styles/Home.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import AnimatedText from './AnimatedText'
import NavBar from '../Navbars/Navbar'
import NavigationPage from '../NavigationPage/NavigationPage'
import NewsCarousel from './NewsCarousel'
import {connect} from 'react-redux'
import Particles from 'react-particles-js';
import {
  Fade, 
  Container, 
  Row, 
  Col, 
} from 'reactstrap'
import {getAllNews} from '../../config/data'

const windowheight = window.innerHeight;

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
      <Container onScroll={(e)=>{e.target.addEventListener("scroll", test)}} fluid className={navbarAnimation.containerElement}>
        <div className={navbarAnimation.navigationPageElement}>
          <NavigationPage />
        </div>
        <div className={navbarAnimation.elementsShown}>
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
          <Row>
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