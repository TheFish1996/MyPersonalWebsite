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
import {getAllNews} from '../../config/data'
const pdf = require("../../img/Resume.pdf")

function Home(props){

  const [newsData, setNewsData] = useState([])

   useEffect(() => {
      const response = async () => {
        let result = await getAllNews();
        setNewsData(result.articles)
      }
      response();
   }, [])

  return (
    <div>
      <NavBar pageName={"Home"} />
      <Container fluid className="homePage">
        <Row className="newsHomePage">
          <Col xs="11" sm="8" md="7" lg="5" xl="4" className="newsHomePageCarousel">
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
      </Container>
    </div>
  )
}

export default Home;