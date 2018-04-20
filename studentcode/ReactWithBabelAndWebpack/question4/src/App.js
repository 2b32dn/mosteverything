import React from 'react';
import './App.css';

class App extends React.Component {
  randomNum =()=>{
    var x = Math.floor(Math.random()*3);
    console.log(x)
    if(document.getElementById('inputBoxId').value == x){
      alert("You guessed correctly!")
    } else if(document.getElementById('inputBoxId').value < x){
      alert("Your guess is too low")
    } else{
      alert("Your guess is too high")
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.randomNum}>Click here</button>
        <input id="inputBoxId"/>
      </div>
    );
  }
}

export default App;
