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
            <NavBar pageName={"About Me"} classDefinition={"navbar-test"} />
            <Container fluid className="aboutMePage">
                <Row>
                    <Col className="aboutMeBeginningLeft" xs="2" sm="2" md="2" lg ="2" xl="2">
                        <p>Overview</p>
                        <p>About Me</p>
                        <p>Goals and Aspirations</p>
                    </Col>
                    <Col className="aboutMeBeginning" xs="8" sm="8" md="8" lg="8" xl="9">
                        <Row>
                            <Col className="tester" xs="7" sm="7" md="7" lg ="7" xl="4">
                                <p>Name</p>
                                <p>Jonathan Fishkin</p>
                            </Col>
                            <Col xs="7" sm="7" md="7" lg ="7" xl="4">
                                <p>Residence</p>
                                <p>Staten Island, New York</p>
                            </Col>
                            <Col xs="7" sm="7" md="7" lg ="7" xl="4">
                                <p>Major</p>
                                <p>Computer Engineering</p>
                            </Col>
                        </Row>
                        <Row style={{marginTop: "10vh"}}>
                            <Col xs="7" sm="7" md="7" lg ="7" xl="4">
                                <p>Background</p>
                                <p>Software Developer</p>
                            </Col>
                            <Col xs="7" sm="7" md="7" lg ="7" xl="4">
                                <p>Interests</p>
                                <p>Web Development</p>
                            </Col>
                            <Col xs="7" sm="7" md="7" lg ="7" xl="4">
                                <p>Interests</p>
                                <p>Mobile Development</p>
                            </Col>
                        </Row>
                        <Row style={{marginTop: "10vh"}}>
                            <Col xs="7" sm="7" md="7" lg ="7" xl="4">
                                <p>Education</p>
                                <p>Stevens Institute of Technology</p>
                            </Col>
                            <Col xs="7" sm="7" md="7" lg ="7" xl="4">
                                <p>Degree</p>
                                <p>Bachelor: Computer Engineering</p>
                            </Col>
                            <Col xs="7" sm="7" md="7" lg ="7" xl="4">
                                <p>Graduation Year</p>
                                <p>2019</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutMe;
