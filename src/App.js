import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function sumParams(...params) {
  return params.reduce((acc, curr) => acc + curr, 0)
}

const myObj = {
  d: 'fuu',
  c: 'foo',
  b: 'bar',
  a: 'baz'
};

const { a, b, ...rest} = myObj

const newObj = {
  ...rest,
  d: 'fuh'
};

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
          <b>a:</b>
          {a}
        </p>
        <p>
          <b>b:</b>
          {b}
        </p>
        <p>
          <b>rest:</b>
          {JSON.stringify(rest)}
        </p>
        <p>
          <b>newObj:</b>
          {JSON.stringify(newObj)}
        </p>
        <p>
          <b>sumParams: </b>
          {sumParams(1, 2, 3, 4)}
        </p>
        </p>
      </div>
    );
  }
}

export default App;
