import React from 'react';
import logo from './logo.svg';
import './App.css';

function sumParams(...params) {
  return params.reduce((acc, curr) => acc + curr, 0);
}

const myObj = {
  d: 'fuu',
  c: 'foo',
  b: 'bar',
  a: 'baz',
};

const { a, b, ...rest } = myObj;

const newObj = {
  ...rest,
  d: 'fuh',
};

const AppIntro = ({ children }) => (
  <div className="App-intro">
    {children.map(item => (
      <p key={item}>
        {item}
      </p>
    ))}
  </div>
);

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">
Diego GS
      </h1>
    </header>
    <AppIntro>
      {[
        `${a} ${b} ${JSON.stringify(rest)}`,
        JSON.stringify(newObj),
        JSON.stringify(rest),
        sumParams(1, 2, 3, 4),
      ]}
    </AppIntro>
  </div>
);

export default App;
