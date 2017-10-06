import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {serverProxy} from './config/keys';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <p> You look quite strange </p>
          <p> Quite ungraceful I must say.... </p>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <a href={`${serverProxy}/auth/google`}> Sign In with GOOGLE </a>
      </div>
    );
  }
}

export default App;
