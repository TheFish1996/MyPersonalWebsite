import React, { useState, useEffect } from 'react';
import {
    Fade, 
    Container, 
    Row, 
    Col, 
  } from 'reactstrap'

    function Overview(props){
        return (
            <Col className="aboutMeBeginning" xs="8" sm="8" md="8" lg="8" xl="9">
                <Row>
                    <Col className="overviewElements" xs="7" sm="7" md="7" lg ="7" xl="4">
                        <p>NAME</p>
                        <p>Jonathan Fishkin</p>
                    </Col>
                    <Col className="overviewElements" xs="7" sm="7" md="7" lg ="7" xl="4">
                        <p>RESIDENCE</p>
                        <p>Staten Island, New York</p>
                    </Col>
                    <Col className="overviewElements" xs="7" sm="7" md="7" lg ="7" xl="4">
                        <p>MAJOR</p>
                        <p>Computer Engineering</p>
                    </Col>
                </Row>
                <Row style={{marginTop: "10vh"}}>
                    <Col className="overviewElements" style={{animationDelay:"1s"}} xs="7" sm="7" md="7" lg ="7" xl="4">
                        <p>BACKGROUND</p>
                        <p>Software Developer</p>
                    </Col>
                    <Col className="overviewElements" style={{animationDelay:"1s"}} xs="7" sm="7" md="7" lg ="7" xl="4">
                        <p>INTERESTS</p>
                        <p>Web Development</p>
                    </Col>
                    <Col className="overviewElements" style={{animationDelay:"1s"}} xs="7" sm="7" md="7" lg ="7" xl="4">
                        <p>INTERESTS</p>
                        <p>Mobile Development</p>
                    </Col>
                </Row>
                <Row style={{marginTop: "10vh"}}>
                    <Col className="overviewElements" style={{animationDelay:"2s"}} xs="7" sm="7" md="7" lg ="7" xl="4">
                        <p>EDUCATION</p>
                        <p>Stevens Institute of Technology</p>
                    </Col>
                    <Col className="overviewElements" style={{animationDelay:"2s"}} xs="7" sm="7" md="7" lg ="7" xl="4">
                        <p>DEGREE</p>
                        <p>Bachelor: Computer Engineering</p>
                    </Col>
                    <Col className="overviewElements" style={{animationDelay:"2s"}} xs="7" sm="7" md="7" lg ="7" xl="4">
                        <p>GRADUATION YEAR</p>
                        <p>2019</p>
                    </Col>
                </Row>
            </Col>
        )
    }

  export default Overview;