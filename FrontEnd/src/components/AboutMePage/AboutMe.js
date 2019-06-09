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
                <Row className="ml-auto">
                    <Col>
                        <h1>PlaceHolder</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutMe;
