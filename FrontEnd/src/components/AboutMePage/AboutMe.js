import '../../styles/AboutMe.css';
import React, { useState, useEffect } from 'react';
import NavBar from '../Navbar'
import Overview from './Overview'
import Biography from './Biography'
import {
    Fade, 
    Container, 
    Row, 
    Col, 
  } from 'reactstrap'

function AboutMe(props){

    const[showElement, setElement] = useState("")

    function showWhichElement(element){
        setElement(element);
    }

    return (
        <div>
            <NavBar pageName={"About Me"} classDefinition={"navbar-test"} />
            <Container fluid className="aboutMePage">
                <Row>
                    <Col className="aboutMeBeginningLeft" xs="2" sm="2" md="2" lg ="2" xl="2">
                        <p 
                            onClick={() => {showWhichElement("overview")}}
                        >Overview</p>
                        <p 
                            onClick={() => {showWhichElement("biography")}}
                        >Biography</p>
                        <p>Goals and Aspirations</p>
                    </Col>
                    {   showElement === "overview" &&
                            <Overview />
                    }
                    {
                        showElement === "biography" &&
                            <Biography />
                    }
                </Row>
            </Container>
        </div>
    )
}

export default AboutMe;
