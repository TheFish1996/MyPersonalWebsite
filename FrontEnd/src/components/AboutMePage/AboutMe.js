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
                    <Col className="d-flex" style={{justifyContent: "center"}}>
                        <h1>PlaceHolder</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutMe;
