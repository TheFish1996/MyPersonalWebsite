import '../../styles/AboutMe.css';
import React, { useState, useEffect } from 'react';
import Overview from './Overview'
import Biography from './Biography'
import {
    Fade, 
    Container, 
    Row, 
    Col, 
  } from 'reactstrap'

function AboutMe(props){

    const[showElement, setElement] = useState("biography")
    function showWhichElement(element){
        setElement(element);
    }

    return (
        <div>
            <Container fluid className="aboutMePage">
                <Row>
                    <Col className="aboutMeBeginningLeft" xs="3" sm="2" md="2" lg ="2" xl="1">
                        <p
                            onClick={() => {showWhichElement("overview")}}
                        >Overview</p>
                        <p 
                            onClick={() => {showWhichElement("biography")}}
                        >About</p>
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
