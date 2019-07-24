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
          <Row className="test">
            <Particles
            params={{
                "fps_limit": 30,
                "particles": {
                    "number": {
                        "value": 200,
                        "density": {
                            "enable": false
                        },
                    "color": {
                        "value": "#000000"
                      }
                    },
                    "size": {
                      "value": 1
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 30,
                        "opacity": 0.3,
                        "color": "#000000"
                    },
                    "move": {
                        "speed": 1
                    },
                    "opacity": {
                        "anim": {
                            "enable": true,
                            "opacity_min": 0.05,
                            "speed": 2,
                            "sync": false
                        },
                        "value": 0.8
                    }
                },
                "polygon": {
                    "enable": true,
                    "scale": 0.5,
                    "type": "inline",
                    "move": {
                        "radius": 10
                    },
                    "url": "/deer.svg",
                    "inline": {
                        "arrangement": "equidistant"
                    },
                    "color" : "#efff00",
                    "draw": {
                        "enable": true,
                        "stroke": {
                            "color": "rgba(0, 0, 0, .4)"
                        }
                    }
                },
                "retina_detect": false,
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "bubble"
                        }
                    },
                    "modes": {
                        "bubble": {
                            "size": 6,
                            "distance": 40,
                        }
                    }
                }
            }} />
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