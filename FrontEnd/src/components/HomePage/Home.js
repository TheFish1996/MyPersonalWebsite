import '../../styles/Home.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import AnimatedText from './AnimatedText'
import NavBar from '../Navbar'
import NewsCarousel from './NewsCarousel'
import {
  Fade, 
  Container, 
  Row, 
  Col, 
} from 'reactstrap'
import {Segment, Sticky, Rail} from 'semantic-ui-react'
import {getAllNews} from '../../config/data'
const pdf = require("../../img/Resume.pdf")
const logo = require("../../img/Picture1.png")

function Home(props){

  const [newsData, setNewsData] = useState([])
  const [navRotate, setNavRotate] = useState(0)
  const [linksShow, setLinksShow] = useState("navbarLinks")
  let navRotateStyle = "navbarCollapse"
  if(navRotate === 0){
    navRotateStyle = "navbarCollapse"
  } else if(navRotate === 1){
    navRotateStyle = "navbarCollapse isActive"
  } else {
    navRotateStyle = "navbarCollapse isActive activeClick"
  }

   useEffect(() => {
      const response = async () => {
        let result = await getAllNews();
        setNewsData(result.articles)
      }
      response();
   }, [])

    function test(e){
      console.log(linksShow)
      const scrollAmount  = e.srcElement.scrollTop
      console.log(scrollAmount)
      if(scrollAmount >= 80){
        setLinksShow("navbarLinksHidden")
      } else {
        setLinksShow("navbarLinks")
      }
      
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
    <div>
      <Container onScroll={(e)=>{e.target.addEventListener("scroll", test)}} fluid className="homePage">
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
      </Container>
    </div>
  )
}

export default Home;