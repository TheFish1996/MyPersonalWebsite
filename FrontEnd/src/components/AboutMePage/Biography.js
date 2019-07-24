import React, { useState, useEffect } from 'react';
import {
    Fade, 
    Container, 
    Row, 
    Col, 
    Table
  } from 'reactstrap'
  import Particles from 'react-particles-js';

    const picture = require('../../img/me2.jpg')

    function Biography(props){

        return (
            <Col className="aboutMeBiography" xs="8" sm="8" md="8" lg="8" xl="9">
                <Row>
                    <Col className="aboutMeBiographyImageContainer" xs="18" sm="18" md="18" lg ="18" xl="3">
                        <img src={picture} alt="avatar"></img>
                    </Col>
                    <Col className="aboutMeBiographyDescriptionContainer" xs="18" sm="18" md="18" lg ="18" xl="9">
                        <Row>
                            <p style={{animationDelay:"1s"}}>Hello, my name is Jonathan Fishkin and I was born and raised in Staten Island New York. My parents originally come from Israel and Russia.
                            I have always been in love with software engineering / development since highschool and have developed some great projects along the way.
                            The projects I have worked on can be found under the 'Projects' tab
                            </p>
                        </Row>
                        <Row>
                            <p style={{animationDelay:"1.5s"}}>
                            At Stevens, my main projects were either web development or mobile app development. 
                            The projects ranged from accessing spotify's API to build a web app to a full react native mobile application that interfaced with a router
                            I love both web development and mobile development and would enjoy working on either front end or back end
                            </p>
                        </Row>
                        <Row>
                            <p style={{animationDelay:"2s"}}>
                            I code in JavaScript, Node.js, C#, Java, HTML/CSS, React.js, .NET, and SQL
                            I am familiar with cloud services pertaining to Amazon Web Services and Google Cloud Platform.
                            A full list of my technical skills is available on my LinkedIN as well as my resume.   
                            </p>
                        </Row>
                        <Row>
                            <i className="fab fa-html5" style={{fontSize: "6vw", color: "#C65A01"}}></i>
                            <i className="fab fa-css3-alt" style={{fontSize: "6vw", color: "#01449E"}}></i>
                            <i className="fab fa-node" style={{fontSize: "6vw", color: "#4CCD0B"}}></i>
                            <i className="fab fa-react" style={{fontSize: "6vw", color: "#0666B7"}}></i>
                            <i className="fab fa-java" style={{fontSize: "6vw", color: "#A60202"}}></i>
                            <i className="fas fa-database" style={{fontSize: "6vw", color: "#979797"}}></i>
                            <i className="fab fa-aws" style={{fontSize: "6vw", color: "#ff9900"}}></i>
                        </Row>
                        <Row>
                        <Row>
                            <svg>
                                <path></path>
                            </svg>
                        </Row>
                        <Particles
                        params={{
                            "fps_limit": 28,
                            "particles": {
                                "number": {
                                    "value": 200,
                                    "density": {
                                        "enable": false
                                    }
                                },
                                "line_linked": {
                                    "enable": true,
                                    "distance": 30,
                                    "opacity": 0.4
                                },
                                "move": {
                                    "speed": 1
                                },
                                "opacity": {
                                    "anim": {
                                        "enable": true,
                                        "opacity_min": 0.05,
                                        "speed": 2,
                                        "sync": false
                                    },
                                    "value": 0.4
                                }
                            },
                            "polygon": {
                                "enable": true,
                                "scale": 0.8,
                                "type": "inline",
                                "move": {
                                    "radius": 10
                                },
                                "url": "/deer.svg",
                                "inline": {
                                    "arrangement": "equidistant"
                                },
                                "draw": {
                                    "enable": true,
                                    "stroke": {
                                        "color": "rgba(255, 255, 255, .2)"
                                    }
                                }
                            },
                            "retina_detect": false,
                            "interactivity": {
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "bubble"
                                    }
                                },
                                "modes": {
                                    "bubble": {
                                        "size": 6,
                                        "distance": 40
                                    }
                                }
                            }
                        }} />
                        </Row>
                    </Col>
                </Row>
            </Col>
        )
    }
  export default Biography;