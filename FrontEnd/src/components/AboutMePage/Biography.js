import React, { useState, useEffect } from 'react';
import {
    Fade, 
    Container, 
    Row, 
    Col, 
  } from 'reactstrap'

    function Biography(props){
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
            </Col>
        )
    }
  export default Biography;