import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      firstName: '',
      lastName: ''
    }
  }

  handleChange1 = (event) => {
    console.log(event.target)
    this.setState({firstName: event.target.value});
  }

  handleChange2 = (event) => {
    this.setState({lastName: event.target.value});
  }

  handleSubmit = (event) =>{
    alert('User name is ' + this.state.firstName + ' ' + this.state.lastName);
    event.preventDefault();
  }

  eraser = (event)=>{
    this.setState({firstName: '', lastName: ''});
  }
  render = () => {
    console.log('state value', this.state.value);
    return (
      <form onSubmit={this.handleSubmit}>
      First Name:
      <input type="text" value={this.state.firstName} onChange={this.handleChange1} />
      Last Name: 
      <input type="text" value={this.state.lastName} onChange={this.handleChange2} />
      <input type="submit" value="Submit" />
      <div>
        <button type="button" onClick={this.eraser}>Click here</button>
      </div>
  </form>
    );
  }
}

export default App;
