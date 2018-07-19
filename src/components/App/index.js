import React, { Component } from 'react';

import Template from '../../layout';
import CounterValue from '../CounterValue';
import OperationButtons from '../OperationButtons';
import ResetButtons from '../ResetButtons';

const INITIAL_STATE = {
  value: 0,
};

class App extends Component {
  state = INITIAL_STATE;

  updateCounter = e => {
    const { value } = e.target;
    this.setState(prevState => ({
      value: prevState.value + Number(value),
    }));
  };

  resetCounter = () => {
    this.setState({
      value: 0,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <Template logo="https://keepcoding.io/es/wp-content/uploads/sites/4/2015/05/logo-keepcoding-web.png">
        <CounterValue value={value} />
        {value > -10 && value < 10 ? (
          <OperationButtons updateCounter={this.updateCounter} />
        ) : (
          <ResetButtons resetCounter={this.resetCounter} />
        )}
      </Template>
    );
  }
}

export default App;
