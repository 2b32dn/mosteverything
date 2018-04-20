import React, { Component } from 'react';
import './App.css';


class App extends React.Component {
  constructor(){
    super();
  }
  showInput = () => {
    console.log(document.getElementById('inputBoxId').value)
    if (Number(document.getElementById('inputBoxId').value) === 42){
      alert("You gueseed correctly")
    } else{
      alert("You guessed poorly")
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.showInput}>
        Click here to guess
        </button>
        <input id="inputBoxId"/>
      </div>
    );
  }

}

export default App;
