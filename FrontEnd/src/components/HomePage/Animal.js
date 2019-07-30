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
        <Col className="animal" xl="10" onMouseMove={mouseMovement}>
            <Particles
            params={{
                "fps_limit": 25,
                "particles": {
                    "number": {
                        "value": canvasElements === true ? 550: 550,
                        "density": {
                            "enable": false,
                        },
                    },
                    "color": {
                    "value": "#003e85"
                    },
                    "size": {
                    "value": 2
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 30,
                        "opacity": 0.5,
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
                    "scale": 1.1,
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
    )
}

export default Animal