import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const user = {
  name: 'Diego',
  surname: 'Gay Saez',
  address: 'C/ Calandria, 13',
  phone: '666666665'
}

const toPrint = `
  Nombre: ${user.name};
  Apellidos: ${user.surname};
  Dirección: ${user.address};
  Teléfono: ${user.phone};
`;

const {name, surname, address, phone} = user;
const toPrint2 = `
Nombre: ${name};
Apellidos: ${surname};
Dirección: ${address};
Teléfono: ${phone};
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{toPrint2}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
