import React, { Component } from 'react';
import './App.css';

var messages = ['hey', 'yes', 'no'];

class App extends Component {
    constructor() {
      super();
      this.state = {text: "Click Here"};
  }
  render() {
      return (<button onClick={() => this.setState({text: messages[Math.floor(Math.random()*3)] })}>{this.state.text}</button>)
  }
}

export default App;
