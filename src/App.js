import React, {Component} from 'react';
import './App.css';
import Home from './Components/Home.js';
import AboutMe from './Components/AboutMe.js';
import Skills from './Components/Skills.js';
import Education from './Components/Education.js';
import Experience from './Components/Experience.js'
import Header from './Components/Header.js'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render(){
  return (
    <div>
    <Router>
    <Header/>
    <Route exact path= "/" component = {Home}/>
    <Route path ="/AboutMe" component={AboutMe}/>
    <Route path = "/Skills" component={Skills}/>
    <Route path ="/Education" component={Education}/>
    <Route path="/Experience" component={Experience}/>
    </Router>
    </div>
  );
}
}

export default App;
