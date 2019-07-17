import '../../styles/NavigationPage/Content.css'
import React, {useState} from "react";
import {
    Row,
    Col,
  } from "reactstrap";
import {Link} from 'react-router-dom'

function Content(props){

    const {contentObject} = props
    let renderedWords;
    if(contentObject === "aboutme"){
        renderedWords =
        <div>
            <Row className="text-focus-in">
                <p style={{color: "#282828", fontSize: "40px", height: "50px", fontWeight: "bold", paddingLeft: "300px"}}>?</p>
            </Row>
            <Row className="text-focus-in">
                <p style={{color: "#57d6ff", fontSize: "60px", height: "50px", fontWeight: "bold", paddingLeft: "200px"}}>I</p>
            </Row> 
            <Row className="text-focus-in">
                <p style={{color: "#57d6ff", fontSize: "40px", height: "50px", fontWeight: "bold", paddingLeft: "400px"}}>M</p>
            </Row> 
            <Row className="text-focus-in">
                <p style={{color: "#57d6ff", fontSize: "40px", height: "50px", fontWeight: "bold", paddingLeft: "700px"}}>A</p>
            </Row>
            <Row className="text-focus-in">
                <p style={{color: "#282828", fontSize: "40px", height: "50px", fontWeight: "bold", paddingLeft: "300px"}}>O</p>
            </Row>
            <Row className="text-focus-in">
                <p style={{color: "#282828", fontSize: "40px", height: "50px", fontWeight: "bold"}}>W</p>
            </Row>
            <Row className="text-focus-in">
                <p style={{color: "#282828", fontSize: "40px", height: "50px", fontWeight: "bold", paddingLeft: "200px"}}>H</p>
            </Row>
        </div>
    }

    if(contentObject === "projects"){
        renderedWords = 
        <div>
            <Row className="text-focus-in-projects">
                <p style={{color: "#57d6ff", fontSize: "40px", height: "50px", fontWeight: "bold", paddingLeft: "300px"}}>P</p>
            </Row>
            <Row className="text-focus-in-projects">
                <i className="fab fa-react" style={{color: "#57d6ff", fontSize: "60px", height: "50px", paddingLeft: "150px"}}></i>
            </Row> 
            <Row className="text-focus-in-projects">
                <p style={{color: "#57d6ff", fontSize: "40px", height: "50px", fontWeight: "bold", paddingLeft: "500px"}}>O</p>
            </Row> 
            <Row className="text-focus-in-projects">
                <p style={{color: "#282828", fontSize: "40px", height: "50px", fontWeight: "bold", paddingLeft: "250px"}}>J</p>
            </Row>
            <Row className="text-focus-in-projects">
                <p style={{color: "#282828", fontSize: "40px", height: "50px", fontWeight: "bold", paddingLeft: "150px"}}>E</p>
            </Row>
            <Row className="text-focus-in-projects">
                <p style={{color: "#282828", fontSize: "40px", height: "50px", fontWeight: "bold"}}>C</p>
            </Row>
            <Row className="text-focus-in-projects">
                <p style={{color: "#57d6ff", fontSize: "40px", height: "50px", fontWeight: "bold", paddingLeft: "200px"}}>T</p>
            </Row>
            <Row className="text-focus-in-projects">
                <p style={{color: "#57d6ff", fontSize: "40px", height: "50px", fontWeight: "bold", paddingLeft: "400px"}}>S</p>
            </Row>
        </div>
    }

    if(contentObject === "experience"){
        renderedWords = 
        <div>
            <Row className="text-focus-in-experience">
                <i className="fab fa-java" style={{color: "#57d6ff", fontSize: "60px", height: "50px"}}></i>
            </Row> 
            <Row className="text-focus-in-experience">
                <p style={{color: "#57d6ff", fontSize: "40px", height: "50px", fontWeight: "bold", paddingLeft: "200px"}}>O</p>
            </Row> 
            <Row className="text-focus-in-experience">
                <p style={{color: "#57d6ff", fontSize: "40px", height: "50px", fontWeight: "bold"}}>B</p>
            </Row> 
            <Row className="text-focus-in-experience">
                <p style={{color: "#282828", fontSize: "40px", height: "50px", fontWeight: "bold", paddingLeft: "250px"}}>H</p>
            </Row>
            <Row className="text-focus-in-experience">
                <p style={{color: "#282828", fontSize: "40px", height: "40px", fontWeight: "bold", paddingLeft: "450px"}}>I</p>
            </Row>
            <Row className="text-focus-in-experience">
                <p style={{color: "#282828", fontSize: "40px", height: "40px", fontWeight: "bold", paddingLeft: "550px"}}>S</p>
            </Row>
            <Row className="text-focus-in-experience">
                <p style={{color: "#282828", fontSize: "40px", height: "40px", fontWeight: "bold", paddingLeft: "350px"}}>T</p>
            </Row>
            <Row className="text-focus-in-experience">
                <p style={{color: "#282828", fontSize: "40px", height: "40px", fontWeight: "bold", paddingLeft: "250px"}}>O</p>
            </Row>
            <Row className="text-focus-in-experience">
                <p style={{color: "#57d6ff", fontSize: "40px", height: "40px", fontWeight: "bold", paddingLeft: "100px"}}>R</p>
            </Row>
            <Row className="text-focus-in-experience">
                <p style={{color: "#57d6ff", fontSize: "40px", height: "40px", fontWeight: "bold", paddingLeft: "200px"}}>Y</p>
            </Row>
        </div>
    }

    if(contentObject === "contact"){
        renderedWords =
        <div>
            <Row className="text-focus-in-contact">
                <p style={{color: "#282828", fontSize: "40px", height: "50px", fontWeight: "bold", paddingLeft: "400px"}}>E</p>
            </Row> 
            <Row className="text-focus-in-contact">
                <p style={{color: "#282828", fontSize: "60px", height: "50px", fontWeight: "bold", paddingLeft: "200px"}}>M</p>
            </Row> 
            <Row className="text-focus-in-contact">
                <p style={{color: "#57d6ff", fontSize: "40px", height: "50px", fontWeight: "bold", paddingLeft: "450px"}}>T</p>
            </Row>
            <Row className="text-focus-in-contact">
                <p style={{color: "#57d6ff", fontSize: "40px", height: "50px", fontWeight: "bold", paddingLeft: "550px"}}>C</p>
            </Row> 
            <Row className="text-focus-in-contact">
                <p style={{color: "#57d6ff", fontSize: "40px", height: "50px", fontWeight: "bold", paddingLeft: "450px"}}>A</p>
            </Row> 
            <Row className="text-focus-in-contact">
                <p style={{color: "#57d6ff", fontSize: "40px", height: "50px", fontWeight: "bold", paddingLeft: "350px"}}>T</p>
            </Row>
            <Row className="text-focus-in-contact">
                <p style={{color: "#282828", fontSize: "40px", height: "50px", fontWeight: "bold", paddingLeft: "300px"}}>N</p>
            </Row>
            <Row className="text-focus-in-contact">
                <p style={{color: "#282828", fontSize: "40px", height: "50px", fontWeight: "bold", paddingLeft: "130px"}}>O</p>
            </Row>
            <Row className="text-focus-in-contact">
                <p style={{color: "#282828", fontSize: "40px", height: "50px", fontWeight: "bold"}}>C</p>
            </Row>
        </div>
    }

    return(
        <Col style={{height: "10vh"}} xl="3">
            {renderedWords}        
        </Col>
    )
}

export default Content