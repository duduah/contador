import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const user = {
  name: 'Diego',
  surname: 'Gay Saez',
  address: 'C/ Calandria, 13',
  phone: '666666665'
}

const {name, surname, address, phone} = user;
const toPrint2 = `
Nombre: ${name};
Apellidos: ${surname};
Dirección: ${address};
Teléfono: ${phone};
`;

const sayHi = hiText => `${hiText}, ${name}`;

const sayHi2 = (hiText) => {
  return `${hiText}, ${name}`;
}

const sayHi3 = function(hiText) {
  return `${hiText}, ${name}`;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{sayHi3('Hola')}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
