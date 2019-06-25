import React, { useState, useEffect } from 'react';
import { 
    Row, 
    Col,
    Button
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
                <Row style={{color: "#471218"}}>
                    <h1>Smart Router</h1>
                </Row>
                <Row style={{borderLeft: "3px solid #471218", color: "white"}}>
                    <h3 style={{paddingLeft: "10px"}}>Description</h3>
                </Row>
                <Row style={{color: "white"}}>
                    <p>There is a growing demand for router control and network diagnostics among the expanding devices connected to home networks, ranging from smartphones to gaming consoles, tablets and many more. 
                    With all these devices connected, it can be difficult to get the most out of the device, especially when faced with situations like buffering, no internet access, or even loss of connection. 
                    The typical user who has this problem would be anyone with a home router/network that they can’t monitor effectively. 
                    My team of fellow classmates and I helped create the Smart Router app, which takes care of these issues by allowing users to see which device is utilizing the most bandwidth on the network and potentially choosing which device or application takes priority above the rest. 
                    For this project I was responsible for building the actual app interface and working on backend golang scripting.</p>
                </Row>
                <Row style={{borderLeft: "3px solid #471218", color: "white"}}>
                    <h3 style={{paddingLeft: "10px"}}>Technologies Used</h3>
                </Row>
                <Row style={{color: "white"}}>
                    <p>The mobile application was built using React-Native, a framework to build android and iOS apps simulatenously, 
                    and our backend signaling server was built using Golang with MongoDB as our storage database. We were looking to deploy this database via AWS storage buckets. The router itself
                    was running an open source linux kurnel called OpenWrt.
                  </p>
                </Row>
                <Row style={{borderLeft: "3px solid #471218", color: "white"}}>
                    <h3 style={{paddingLeft: "10px"}}>Current Screen:  
                    {
                        viewingElement === 1 && <span className="projectsPageDescription" style={{color: "#471218"}}> Main Page</span>
                    }
                    {
                        viewingElement === 2 && <span className="projectsPageDescription" style={{color: "#471218"}}> Router Settings Page</span>
                    }
                    {
                        viewingElement === 3 && <span className="projectsPageDescription" style={{color: "#471218"}}> Live Update Page</span>
                    }
                    {
                        viewingElement === 4 && <span className="projectsPageDescription" style={{color: "#471218"}}> Device Settings Page</span>
                    }
                    {
                        viewingElement === 5 && <span className="projectsPageDescription" style={{color: "#471218"}}> Live Video Demo</span>
                    }
                    </h3>
                </Row>
                <Row style={{color: "white"}}>
                    {
                        viewingElement === 1 && <p className="projectsPageDescription">The current screen is Main Page Screen on the app. This screen shows all the current devices connected to the router. Upon expansion of the module we have data 
                        provided to us from the server showcasing each specific devices Mac Adress, IP Adress, Average Upload Rate, and Average Download Rate. If you click on the 'Edit Device Settings'
                        button it will bring you to a more advanced customization for the specific device. </p>
                    }
                    {
                        viewingElement === 2 && <p className="projectsPageDescription">The current screen is the Router Settings Screen on the app. This screen shows the router algorithm mode you can select. Depending on the algorithm selected
                        you can then chose a Rate Cap for the router or the Rate Cap will be disabled because of the specific algorithm chosen.
                        </p>
                    }
                    {
                        viewingElement === 3 && <p className="projectsPageDescription">The current screen is the Live Update Screen on the app. This page lists all the current devices on the network and their respected Download Rate and
                        Upload Rate. Since this is a live page, every 3 seconds the counter will refresh with new data to get a real time effect for the devices on the network. The reason it's 3 seconds is because
                        on the backend it takes 2 seconds for our server to pull in new data from the router with a 1 second buffer for displaying
                        </p>
                    }
                    {
                        viewingElement === 4 && <p className="projectsPageDescription">The current screen is the Device Settings Screen on the app. This screen is accessed from the main screen, where you click on a specific devices 'Edit Device Settings'
                        button. On this screen you can edit the device name and then chose the device class settings. Depending on the algorithm and rate cap chosen for the router settings, you can then modify the 
                        rate, ceiling, and priority per device.
                        </p>
                    }
                    {
                        viewingElement === 5 && <p className="projectsPageDescription">This is a live demo of the app being used.
                        </p>
                    }
                </Row>
                <Row style={{color: "white"}}>
                    <Button size="md" href="https://github.com/TheFish1996/SmartRouter" style={{backgroundColor: "#471218", marginLeft: "10px"}}>Github Link</Button>
                </Row>
            </Col>
        </Row>
    )
  }

  export default SmartRouter;