import '../../styles/HomePage/Home.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import AnimatedText from './AnimatedText'
import NavBar from '../Navbars/Navbar'
import NavigationPage from '../NavigationPage/NavigationPage'
import Animal from './Animal'
import NewsCarousel from './NewsCarousel'
import {connect} from 'react-redux'
import $ from 'jquery';
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
  const [linksShow, setLinksShow] = useState("navbarLinks noAnimation")
  const [canvasElements, setCanvasElements] = useState(true)  //we want to disable animations when there is no need for it
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
          <NavBar setCanvasElements={setCanvasElements} linksShow={linksShow} />
        </div>
        { showNavigationPage === false && //Basically going to have one column be the whale but when it comes  to smaller screens it will just be on the side
          <Row>
            <Animal canvasElements={canvasElements} />
          </Row>
        }
      </Container>
    </div>
  )
}

export default connect(
  mapStateToProps,
  null
)(Home);