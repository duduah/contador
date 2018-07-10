import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const myArray = [1,2,3,4,5,6,7,8,9];

const result1 = myArray.map((v, k) => {
  const value = v * 2
  const append = k < (myArray.length - 1) ? ', ' : '';
  return `${value}${append}`;
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Diego GS</h1>
        </header>
        <p className="App-intro">
        <p>
            <b>myArray:</b>
            {myArray}
          </p>
          <p>
            <b>Result1:</b>
            {result1}
          </p>
        </p>
      </div>
    );
  }
}

export default App;
