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
                    <img onClick={() => {setViewingItem(1)}} className={viewingElement === 1 && "projectsPageSmartRouterImage"} src={smartRouter1Small}  alt="Smart Router Small Image 1"></img>
                    <img onClick={() => {setViewingItem(2)}} className={viewingElement === 2 && "projectsPageSmartRouterImage"} src={smartRouter2Small}  alt="Smart Router Small Image 1"></img> 
                    <img onClick={() => {setViewingItem(3)}} className={viewingElement === 3 && "projectsPageSmartRouterImage"} src={smartRouter3Small}  alt="Smart Router Small Image 1"></img> 
                    <img onClick={() => {setViewingItem(4)}} className={viewingElement === 4 && "projectsPageSmartRouterImage"} src={smartRouter4Small}  alt="Smart Router Small Image 1"></img> 
                    <img onClick={() => {setViewingItem(5)}} className={viewingElement === 5 && "projectsPageSmartRouterImage"} src={smartRouterVideoSmall}  alt="Smart Router Small Image 1"></img>        
                </Row>
            </Col>
            <Col xl="6" className="projectsPageSmartRouter">
                <p>Testing</p>
            </Col>
        </Row>
    )
  }

  export default SmartRouter;