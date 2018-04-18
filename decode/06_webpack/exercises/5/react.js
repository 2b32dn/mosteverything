import React from "react";
import ReactDOM from 'react-dom';

// var React = require('react');
// var ReactDOM = require('react-dom');
 
class MyComponent extends React.Component {
  render() {
    return React.createElement("div", null, "Hello World");
  }
}

var node = document.getElementById('reactRoot');

ReactDOM.render(React.createElement(MyComponent), node);
console.log(React)
console.log(ReactDOM)


// ReactDOM.render(y,x);