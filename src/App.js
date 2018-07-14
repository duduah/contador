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

const AppLayout = ({ headerContent, introContent }) => (
  <div className="App">
    {headerContent}
    {introContent}
  </div>
);

AppLayout.propTypes = {
  headerContent: PropTypes.node.isRequired,
  introContent: PropTypes.node.isRequired,
};

const AppHeader = ({ data }) => (
  <header className="App-header">
    <img src={data.logo} className="App-logo" alt="logo" />
    <h1 className="App-title">
      {data.title}
    </h1>
  </header>
);

AppHeader.propTypes = {
  data: PropTypes.shape({
    logo: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
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

AppIntro.defaultProps = {
  children: [],
};

AppIntro.propTypes = {
  children: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

const App = () => (
  <AppLayout
    headerContent={<AppHeader data={{ logo, title: 'Diego GS' }} />}
    introContent={(
      <AppIntro>
        {['hola', JSON.stringify(newObj), JSON.stringify(rest), sumParams(1, 2, 3, 4)]}
      </AppIntro>
)}
  />
);

export default App;
