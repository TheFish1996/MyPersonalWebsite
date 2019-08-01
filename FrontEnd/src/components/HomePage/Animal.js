import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
    Fade, 
    Container, 
    Row, 
    Col, 
} from 'reactstrap'
import Particles from 'react-particles-js';

function Animal(props){

    const {canvasElements} = props

    function mouseMovement(e){
        //console.log("Screen x is: " + e.screenX + "Screen y is: " + e.screenY )
        if(e.screenX >= 1155 && e.screenY >= 491){
          //setCanvasElementColor("#0fbd3d")
        }
      }

    return (
        <Row>
            <Col className="animal" xl="10" onMouseMove={mouseMovement}>
                <Particles
                params={{
                    "fps_limit": 25,
                    "particles": {
                        "number": {
                            "value": canvasElements === true ? 650: 350,
                            "density": {
                                "enable": false,
                            },
                        },
                        "color": {
                        "value": "#003e85"
                        },
                        "size": {
                        "value": 2.2
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 35,
                            "opacity": 1,
                            "color": "#000000"
                        },
                        "move": {
                            "speed": canvasElements === true ? 1: 0
                        },
                        "opacity": {
                            "anim": {
                                "enable": true,
                                "opacity_min": 0.05,
                                "speed": 2,
                                "sync": false
                            },
                            "value": 0.9
                        }
                    },
                    "polygon": {
                        "enable": true,
                        "scale": 1.6,
                        "type": "inline",
                        "move": {
                            "radius": canvasElements === true ? 8: 0,
                        },
                        "url": "/deer.svg",
                        "inline": {
                            "arrangement": "equidistant"
                        },
                        "draw": {
                            "enable": true,
                            "stroke": {
                                "color": "rgba(0, 0, 0, 0.1)",
                            }
                        }
                    },
                    "retina_detect": false,
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": canvasElements === true ? true: false,
                                "mode": "bubble"
                            }
                        },
                        "modes": {
                            "bubble": {
                                "size": 8,
                                "distance": 50,
                            }
                        }
                    }
                }} />
            </Col>
            <Col style={{paddingRight: "200px", textAlign: "left", marginTop: "450px"}} xl="4">
                <p style={{lineHeight: "30px"}}>
                    <span style={{fontSize: "60px"}}>A</span>
                    <span className="aboutMeProjectsText">
                        t Stevens, my main projects were either web development or mobile app development. 
                        The projects ranged from accessing spotify's API to build a web app to a full react native mobile application that interfaced with a router
                        I love both web development and mobile development and would enjoy working on either front end or back end
                    </span>
                </p>
            </Col>
            <Col style={{paddingRight: "200px", textAlign: "left", marginBottom: "350px"}} xl="4">
                <p style={{lineHeight: "30px"}}>
                    <span style={{fontSize: "60px"}}>H</span>
                    <span className="aboutMeProjectsText">
                        ello, my name is Jonathan Fishkin and I was born and raised in Staten Island New York. My parents originally come from Israel and Russia.
                        I have always been in love with software engineering / development since highschool and have developed some great projects along the way.
                        The projects I have worked on can be found under the 'Projects' tab
                    </span>
                </p>
            </Col>
            <Col style={{paddingRight: "70px", textAlign: "left", marginTop: "450px", paddingLeft: "150px"}} xl="4">
                <p style={{lineHeight: "30px"}}>
                    <span style={{fontSize: "60px"}}>I</span>
                    <span className="aboutMeProjectsText">
                        code in JavaScript, Node.js, C#, Java, HTML/CSS, React.js, .NET, and SQL
                        I am familiar with cloud services pertaining to Amazon Web Services and Google Cloud Platform.
                        A full list of my technical skills is available on my LinkedIN as well as my resume. 
                        hich can be found on either the contact page or the navigation page
                    </span> 
                </p>
            </Col>
        </Row>
    )
}

export default Animal