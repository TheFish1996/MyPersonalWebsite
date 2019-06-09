import '../../styles/App.css';
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

let wordsArray = ["React", "Redux", "Node.js"];

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
      <NavBar />
      <Container fluid className="homePage">
        <Row className="newsHomePage">
          <Col xs="13" sm="8" md="7" lg="5" xl="3" className="newsHomePageCarousel">
            <NewsCarousel newsData={newsData} />
          </Col>
        </Row>
        <Row className="animatedText">
          <Col>
            <AnimatedText />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home;