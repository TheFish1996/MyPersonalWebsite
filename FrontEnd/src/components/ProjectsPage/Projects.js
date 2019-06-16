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
            <NavBar pageName={"Projects"} classDefinition={"navbar-test"} />
            <Container fluid className="projectsPage">
                <Row>
                    <Col className="projectsBeginningLeft" xs="3" sm="2" md="2" lg ="2" xl="1">
                        <p
                            onClick={() => {showWhichElement("overview")}}
                        >Overview</p>
                        <p 
                            onClick={() => {showWhichElement("biography")}}
                        >About</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Projects;