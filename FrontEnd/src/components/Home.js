import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './Navbar'
import {Fade, Container, Row, Col} from 'reactstrap'

const video = require("../img/mainTheme.mp4")

function Home(props){
  return (
    <div>
      <video className="video-container" src={video} autoPlay muted loop></video>
      <NavBar />
      <Container fluid className="homePageAnimation">
        <Row>
          <Col>
            <h1>Testing</h1>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home;