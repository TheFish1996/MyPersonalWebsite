import '../../styles/Projects.css';
import React, { useState, useEffect } from 'react';
import NavBar from '../Navbar'
import {
    Fade, 
    Container, 
    Row, 
    Col,
    Collapse,
    Card,
    CardBody,
    CardText,
    Button,
    Jumbotron
  } from 'reactstrap'

function Projects(props){

    const[showElement, setElement] = useState("biography")
    const[collapse, setCollapse] = useState(false)

    function showWhichElement(element){
        setElement(element);
    }

    function toggle(){
        setCollapse(!collapse)
    }

    return (
        <div>
            <NavBar pageName={"Projects"} classDefinition={"navbar-project"} />
            <div className="projectsPageDropdown">
                <Collapse style={{marginLeft: "auto", marginRight: "auto", width: "200px"}} isOpen={collapse}>
                    <Card style={{backgroundColor:"#1d1350"}}>
                        <CardBody style={{color: "white", fontSize: "20px"}}>
                            <CardText>Project Selection</CardText>
                            <CardText>Project Selection</CardText>
                            <CardText>Project Selection</CardText>
                            <CardText>Project Selection</CardText>
                        </CardBody>
                    </Card>
                </Collapse>
                <Button onClick={toggle} style={collapse == false ? {backgroundColor: "#1d1350"} : {backgroundColor: "#9253cb"} } className="projectsPageDropdownButton">Project Selection</Button>
            </div>
            <Container fluid className="projectsPage">
                <Row >
                    <Col sm="3" xl="4" className="projectsPageDescription">
                        <p>Testing</p>
                    </Col>
                    <Col xl="6" className="projectsPageDescription">
                        <p>Testing</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Projects;