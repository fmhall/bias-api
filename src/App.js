import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebaseInstance from '/utils/configureFirebaseInstance'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> Welcome to bias checker</h1>
          <div
            className="Horizontal-box"
          >
            <h1>
              This source's rating: 
            </h1>
            <h1>
              6
            </h1>
          </div>
          <div
            className="Horizontal-box"
          >
             <h1>
              This article's crowdsourced rating: 
            </h1>
            <h1>
              6
            </h1>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
