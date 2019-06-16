import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Home from './components/HomePage/Home'
import AboutMe from './components/AboutMePage/AboutMe'
import Projects from './components/ProjectsPage/Projects'
import {Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <Switch>
        <Route exact path ="/" component = {Home} />
        <Route path = "/aboutme" component = {AboutMe} />
        <Route path = "/projectspage" component = {Projects} />
      </Switch>
    </div>
  );
}

export default App;
