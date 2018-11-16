import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
          <Route path={"/"} component={Header}>
            <IndexRoute component={Home}/>
            <Route path={"about"} component={About} />
            <Route path={"contact"} component={Contact} />
          </Route>
      </Router>
    );
  }
}

export default App;
