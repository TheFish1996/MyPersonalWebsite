import React, { useState, useEffect } from 'react';
import { 
    Row, 
    Col,
  } from 'reactstrap'

  const video = require("../../img/SmartRouterVideo.mp4")
  const smartRouterVideoSmall = require("../../img/SmartRouterVideoSmall.PNG")
  const smartRouter1 = require("../../img/SmartRouter1.png")
  const smartRouter1Small = require("../../img/SmartRouter1Small.png")
  const smartRouter2 = require("../../img/SmartRouter2.png")
  const smartRouter2Small = require("../../img/SmartRouter2Small.png")
  const smartRouter3 = require("../../img/SmartRouter3.png")
  const smartRouter3Small = require("../../img/SmartRouter3Small.png")
  const smartRouter4 = require("../../img/SmartRouter4.png")
  const smartRouter4Small = require("../../img/SmartRouter4Small.png")

  function SmartRouter(props){

    const [viewingElement, setViewingElement] = useState(1)

    function setViewingItem(item){
        setViewingElement(item)
    }

    return (
        <Row>
            <Col sm="4" xl="4" className="projectsPageSmartRouter">
                <Row style={{display:"flex", justifyContent: "center"}}>
                    { viewingElement === 1 &&
                        <img width="300px" height="600px" src={smartRouter1} alt="Smart Router Image 1"></img>
                    }
                    { viewingElement === 2 &&
                        <img width="300px" height="600px" src={smartRouter2} alt="Smart Router Image 2"></img>
                    }
                    { viewingElement === 3 &&
                        <img width="300px" height="600px" src={smartRouter3} alt="Smart Router Image 3"></img>
                    }
                    { viewingElement === 4 &&
                        <img width="300px" height="600px" src={smartRouter4} alt="Smart Router Image 4"></img>
                    }
                    { viewingElement === 5 &&
                        <video width="300px" height="600px"  controls>
                            <source src={video} type="video/mp4" />
                        </video>
                    }
                </Row>
                <Row className="projectsPageSmartRouterControllers">
                    <img onClick={() => {setViewingItem(1)}} className={viewingElement === 1 ? "projectsPageSmallImageActive" : "projectsPageSmallImageInactive" } src={smartRouter1Small}  alt="Smart Router Small Image 1"></img>
                    <img onClick={() => {setViewingItem(2)}} className={viewingElement === 2 ? "projectsPageSmallImageActive" : "projectsPageSmallImageInactive"} src={smartRouter2Small}  alt="Smart Router Small Image 1"></img> 
                    <img onClick={() => {setViewingItem(3)}} className={viewingElement === 3 ? "projectsPageSmallImageActive" : "projectsPageSmallImageInactive"} src={smartRouter3Small}  alt="Smart Router Small Image 1"></img> 
                    <img onClick={() => {setViewingItem(4)}} className={viewingElement === 4 ? "projectsPageSmallImageActive" : "projectsPageSmallImageInactive"} src={smartRouter4Small}  alt="Smart Router Small Image 1"></img> 
                    <img onClick={() => {setViewingItem(5)}} className={viewingElement === 5 ? "projectsPageSmallImageActive" : "projectsPageSmallImageInactive"} src={smartRouterVideoSmall}  alt="Smart Router Small Image 1"></img>        
                </Row>
            </Col>
            <Col xl="6" className="projectsPageSmartRouter">
                <Row style={{color: "white"}}>
                    <h1>Smart Router</h1>
                </Row>
                <Row style={{color: "white"}}>
                    <h3>Description</h3>
                </Row>
                <Row style={{backgroundColor: "#471218", color: "white"}}>
                    <p>There is a growing demand for router control and network diagnostics among the expanding devices connected to home networks, ranging from smartphones to gaming consoles, tablets and many more. 
                    With all these devices connected, it can be difficult to get the most out of the device, especially when faced with situations like buffering, no internet access, or even loss of connection. 
                    The typical user who has this problem would be anyone with a home router/network that they can’t monitor effectively. 
                    My team of fellow classmates and I helped create the Smart Router app, which takes care of these issues by allowing users to see which device is utilizing the most bandwidth on the network and potentially choosing which device or application takes priority above the rest. 
                    For this project I was responsible for building the actual app interface and working on backend golang scripting.</p>
                </Row>
                <Row style={{color: "white"}}>
                    <h3>Technologies Used</h3>
                </Row>
            </Col>
        </Row>
    )
  }

  export default SmartRouter;