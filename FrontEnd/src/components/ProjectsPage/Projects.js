import '../../styles/Projects.css';
import React, { useState, useEffect } from 'react';
import SmartRouter from './SmartRouter'
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
  } from 'reactstrap'

function Projects(props){

    const[showElement, setElement] = useState(<SmartRouter />)
    const[collapse, setCollapse] = useState(false)

    function showWhichElement(element){
        switch(element){
            case 1:
            setElement(<SmartRouter />);
            break;
        }
    }

    function toggle(){
        setCollapse(!collapse)
    }

    return (
        <div>
            <div className="projectsPageDropdown">
                <Collapse style={{marginLeft: "auto", marginRight: "auto", width: "200px"}} isOpen={collapse}>
                    <Card style={{backgroundColor: "#0b0f32"}}>
                        <CardBody style={{color: "white", fontSize: "20px", textAlign: "center"}}>
                            <CardText  onClick={() => {showWhichElement(1)}}>Smart Router</CardText>
                            <CardText >Webify</CardText>
                            <CardText  >Project Selection</CardText>
                            <CardText  >Project Selection</CardText>
                        </CardBody>
                    </Card>
                </Collapse>
                <Button onClick={toggle} style={collapse == false ? {backgroundColor: "#0b0f32"} : {backgroundColor: "#9253cb"} } className="projectsPageDropdownButton">Project Selection</Button>
            </div>
            <Container fluid className="projectsPage">
                {showElement}
            </Container>
        </div>
    )
}

export default Projects;