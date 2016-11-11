import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
// import {   } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App-main">
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

export default App;
