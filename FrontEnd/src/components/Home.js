import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './Navbar'
import {Fade} from 'reactstrap'

const video = require("../img/mainTheme.mp4")

function Home(props){
  return (
    <div>
      <video className="video-container" src={video} autoPlay muted loop></video>
      <NavBar />
    </div>
  )
}

export default Home;