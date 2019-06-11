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
          <Col xs="10" sm="8" md="8" lg="6" xl="3" className="newsHomePageCarousel">
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
            <i className="fab fa-linkedin"></i>
          </Col>
          <Col xs= "2" md="2" lg="2">
            <i className="fab fa-github"></i>
          </Col>
          <Col xs= "2" md="2" lg="2" xl="2">
            <i className="far fa-file-alt"></i>
          </Col>
          <Col xs= "2" md="2" lg="2" xl="2">
            <i className="far fa-envelope"></i>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home;