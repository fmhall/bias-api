import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <h3 className="Title-Box"> Welcome to Bias Checker</h3>
          <Rating source="source" rating="6"></Rating>
          <Rating source="article's crowdsourced" rating="7"></Rating>
          <div className="divider"></div>
          <h3 className="Title-Box"> Add your input: </h3>
        </header>
      </div>
    );
  }
}

function Rating(props) {
  return (
      <div className="Horizontal-box">
          <p className="Main-text">
              This {props.source}'s bias rating:
          </p>
          <p className="Main-text rating" >
              {props.rating}
          </p>
      </div>

  ); 
}

export default App;
