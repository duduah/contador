import React, { Component } from 'react';

import Template from '../../layout';
import CounterValue from '../CounterValue';
import OperationButtons from '../OperationButtons';
import ResetButtons from '../ResetButtons';

const value = 10;

class App extends Component {
  state = {
    value: 6,
  };

  render() {
    return (
      <Template logo="https://keepcoding.io/es/wp-content/uploads/sites/4/2015/05/logo-keepcoding-web.png">
        <CounterValue value={this.state.value} />
        {value > -10 && value < 10 ? <OperationButtons /> : <ResetButtons />}
      </Template>
    );
  }
}

export default App;
