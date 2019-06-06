import '../styles/App.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './Navbar'
import {Fade, Container, Row, Col} from 'reactstrap'

const video = require("../img/mainTheme.mp4")
let wordsArray = ["React", "Redux", "Node.js"];

function Home(props){

  const [cyclingName, setCyclingName] = useState(wordsArray[0]) //sets the cycling name
  const [counter, setCounter] = useState(1)                     //sets the counter to 1 because cycling name is 0
  const [updating, setUpdating] = useState(true)                //updating status of cyclerm by default true so we can move forward

   function nameChange(){                   //function for when the name needs to change
     if(counter === 3){                     //if the counter is equal to 3 we will set it back to 1 and then se the cycling name back to 0      
      setCounter(1)
      setCyclingName(wordsArray[0])
     } else {
      setCounter(counter + 1)               //if not we increment counter and set the name to the new counter value
      setCyclingName(wordsArray[counter])
     }
   }

   useEffect(() => {
    if(updating === false){               //if updating is false aka we are moviong backwards, we set the updating to true and change the name after 500 seconds(animation time)
      setTimeout(() => {
        setUpdating(true)
        nameChange()
      }, 500)
    } else {
      setTimeout(() => {                //if updating  is true and we are animation forward, we set the updating to false after 2000 seconds to let the animation finish and wait
        setUpdating(false)
      }, 2000)
    }
   })

  return (
    <div>
      <NavBar />
      <Container fluid className="homePageAnimation">
        <Row>
          <Col>
          {
            updating === true
            ? <p className="frontpageTextAnimation">{cyclingName}</p> 
            : <p className="frontpageTextAnimationBack">{cyclingName}</p>
          }
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home;