import React, { useState, useEffect } from 'react';
import {
    Fade, 
    Container, 
    Row, 
    Col, 
    Table
  } from 'reactstrap'

    const picture = require('../../img/me2.jpg')

    

    function Biography(props){
        return (
            <Col className="aboutMeBiography" xs="8" sm="8" md="8" lg="8" xl="9">
                <Row>
                    <Col xs="7" sm="7" md="7" lg ="7" xl="3">
                        <img width="90%" height="60%" src={picture} alt="avatar"></img>
                    </Col>
                    <Col xs="7" sm="7" md="7" lg ="7" xl="9">
                        <p style={{animationDelay:"1.5s"}}>Hello, my name is Jonathan Fishkin and I was born and raised in Staten Island New York. My parents originally come from Israel and Russia.
                        I have always been in love with software engineering / development since highschool and have developed some great projects along the way.
                        The projects I have worked on can be found under the 'Projects' tab
                        </p>
                        <p style={{animationDelay:"2s"}}>
                        At Stevens, my main projects were either web development or mobile app development. 
                        The projects ranged from accessing spotify's API to build a web app to a full react native mobile application that interfaced with a router
                        I love both web development and mobile development and would enjoy working on either front end or back end
                        </p>
                        <p style={{animationDelay:"2.5s"}}>
                        I code in JavaScript, Node.js, C++ Java, HTML/CSS, React.js, .NET, and SQL
                        I am familiar with cloud services pertaining to Amazon Web Services and Google Cloud Platform
                        A full list of my technical skills is available on my LinkedIN as well as my resume.   
                        </p>
                    </Col>
                </Row>
            </Col>
        )
    }
  export default Biography;