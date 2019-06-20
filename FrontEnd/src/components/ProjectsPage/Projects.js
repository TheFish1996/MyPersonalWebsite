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
    Button
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
                    <Card style={{backgroundColor:"black"}}>
                        <CardBody style={{color: "white", fontSize: "20px"}}>
                            <CardText>Project Selection</CardText>
                            <CardText>Project Selection</CardText>
                            <CardText>Project Selection</CardText>
                            <CardText>Project Selection</CardText>
                        </CardBody>
                    </Card>
                </Collapse>
                <Button onClick={toggle} style={collapse == false ? {backgroundColor: "black"} : {backgroundColor: "#9253cb"} } className="projectsPageDropdownButton">Project Selection</Button>
            </div>
            <Container fluid className="projectsPage">
                <Row style={{paddingTop: "50px"}}>
                    <p>Testing</p>
                </Row>
                <Row>
                    <p>Testing</p>
                </Row>
            </Container>
        </div>
    )
}

export default Projects;