import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
 constructor() {
   super();
   this.state = {
    firstName: '',
    lastName:''
    };
 }

 handleChange1 = (event) => {
   this.setState({firstName: event.target.value});
 }

 handleChange2 = (event) => {
  this.setState({lastName: event.target.value});
}

 handleSubmit = (event) => {
   alert('A name was submitted: ' + this.state.firstName + " " + this.state.lastName);
   event.preventDefault();
 }

 render = () => {
   return (
     <form onSubmit={this.handleSubmit}>
         Name:
         <input id="inputId" type="text" value={this.state.firstName} onChange={this.handleChange1} />
         Last Name:
         <input type="text" value={this.state.lastName} onChange={this.handleChange2} />
       <input type="submit" value="Submit" />
     </form>
   );
 }
}

export default App;
