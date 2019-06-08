import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Home from './components/HomePage/Home'
import {Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <Switch>
        <Route exact path ="/" component = {Home} />
      </Switch>
    </div>
  );
}

export default App;
