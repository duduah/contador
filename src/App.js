import React from 'react';
import PropTypes from 'prop-types';
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

const AppHeader = ({ data }) => (
  <header className="App-header">
    <img src={data.logo} className="App-logo" alt="logo" />
    <h1 className="App-title">
      {data.title}
    </h1>
  </header>
);

const AppIntro = ({ children }) => (
  <div className="App-intro">
    {children.map(item => (
      <p key={item}>
        {item}
      </p>
    ))}
  </div>
);

AppIntro.propTypes = {
  children: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
};

const App = () => (
  <div className="App">
    <AppHeader data={{ logo, title: 'Diego GS' }} />
    <AppIntro>
      {['hola', JSON.stringify(newObj), JSON.stringify(rest), sumParams(1, 2, 3, 4)]}
    </AppIntro>
  </div>
);

export default App;
