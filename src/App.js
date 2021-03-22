import React, { Component } from 'react';

import {Button} from './Button';

import Counter from './Counter';

class App extends Component {

 state = {
      count: 1
    }

  

  handleCount(value) {
    this.setState((prevState) => ({ count: prevState.count + value }));
  }

  render() {


    return (
      <div>
        Current count: {this.state.count}
        <hr />
        <Button sign="+" count={this.state.count} updateCount={this.handleCount.bind(this)} />
        <Button sign="-" count={this.state.count} updateCount={this.handleCount.bind(this)} />
        <Counter/>

      </div>
    );
  }
}

export default App;
