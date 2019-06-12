import '../../styles/AboutMe.css';
import React, { useState, useEffect } from 'react';
import NavBar from '../Navbar'
import {
    Fade, 
    Container, 
    Row, 
    Col, 
  } from 'reactstrap'

function AboutMe(props){
    return (
        <div>
            <NavBar pageName={"About Me"} />
            <Container fluid className="aboutMePage">
                <Row>
                    <Col className="aboutMeBeginningLeft" sm="2" md="2" lg ="2" xl="2">
                        <h3>Overview</h3>
                        <h3>About Me</h3>
                        <h3>Goals and Aspirations</h3>
                    </Col>
                    <Col className="aboutMeBeginning" md="6" lg="7" xl="9">
                        <h3>PlaceHolder</h3>
                        <h3>PlaceHolder</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutMe;
