import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const myArray = [1,2,3,4,5,6,7,8,9];

const addAppend = arr => arr.map((v, k) => {
  const append = k < arr.length - 1 ? ', ': '';
  return `${v}${append}`;
});

const result1 = myArray.map((v, k) => {
  const value = v * 2
  return `${value}`;
});

const result2 = myArray.filter(v => v % 2 == 0);

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
            {addAppend(myArray)}
        </p>
        <p>
          <b>Dobles:</b>
          {addAppend(result1)}
        </p>
        <p>
          <b>Pares:</b>
          {addAppend(result2)}
        </p>
        </p>
      </div>
    );
  }
}

export default App;
