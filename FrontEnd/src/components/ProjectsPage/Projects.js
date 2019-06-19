import '../../styles/Projects.css';
import React, { useState, useEffect } from 'react';
import NavBar from '../Navbar'
import {
    Fade, 
    Container, 
    Row, 
    Col, 
  } from 'reactstrap'

function Projects(props){

    const[showElement, setElement] = useState("biography")

    function showWhichElement(element){
        setElement(element);
    }

    return (
        <div>
            <NavBar pageName={"Projects"} classDefinition={"navbar-project"} />
            <Container fluid className="projectsPage">
                <Row className="projectsBeginningLeftContainer">
                    <Col className="projectsBeginningValues" style={{borderLeft: "3px solid #9253cb"}} xs="3" sm="2" md="2" lg ="2" xl="1">
                        <p
                            onClick={() => {showWhichElement("overview")}}
                        >Overview</p>
                    </Col>
                    <Col className="projectsBeginningValues" xs="3" sm="2" md="2" lg ="2" xl="1">
                        <p
                            onClick={() => {showWhichElement("overview")}}
                        >Overview</p>
                    </Col>
                    <Col className="projectsBeginningValues" style={{borderRight: "3px solid #9253cb"}} xs="3" sm="2" md="2" lg ="2" xl="1">
                        <p
                            onClick={() => {showWhichElement("overview")}}
                        >Overview</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Projects;