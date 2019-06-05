import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './Navbar'
import {Fade, Container, Row, Col} from 'reactstrap'

const video = require("../img/mainTheme.mp4")
let wordsArray = ["React", "Redux", "Node.js"]

function Home(props){

  const [cyclingName, setCyclingName] = useState(wordsArray[0])
  const [counter, setCounter] = useState(1)
  const [updating, setUpdating] = useState(true)

   function nameChange(){
     if(counter === 3){
      setCounter(1)
      setCyclingName(wordsArray[0])
     } else {
      setCounter(counter + 1)
      setCyclingName(wordsArray[counter])
     }
   }

   useEffect(() => {
    if(updating === false){
      setTimeout(() => {
        setUpdating(true)
        nameChange()
      }, 1500)
    } else {
      setTimeout(() => {
        setUpdating(false)
      }, 1500)
    }
   })

  return (
    <div>
      <video className="video-container" src={video} autoPlay muted loop></video>
      <NavBar />
      <Container fluid className="homePageAnimation">
        <Row>
          <Col>
          {
            updating === true
            ? <h1 className="frontpageTextAnimation">{cyclingName}</h1> 
            : <h1 className="frontpageTextAnimationBack">{cyclingName}</h1>
          }
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home;