import '../../styles/Home.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import AnimatedText from './AnimatedText'
import NavBar from '../Navbar'
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

   useEffect(() => {
      const response = async () => {
        let result = await getAllNews();
        setNewsData(result.articles)
      }
      response();
   }, [])

   useEffect(() => {
     console.log(showNavigationPage)
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
      <Container onScroll={(e)=>{e.target.addEventListener("scroll", test)}} fluid className="homePage">
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
      </Container>
    </div>
  )
}

export default connect(
  mapStateToProps,
  null
)(Home);