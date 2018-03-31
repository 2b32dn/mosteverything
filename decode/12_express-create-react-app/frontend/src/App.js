import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  submit = () => {
    var usr = this.username.value;
    var pwd = this.password.value;
    this.name = usr;
    console.log("the username", this.name);
    console.log("username", usr);
    console.log("password", pwd);
    fetch('http://localhost:3000/login', {
      method: "POST",
      credentials: 'include',
      body: JSON.stringify({
        username: usr,
        password: pwd
      })
    })
      .then(x => x.text())
      .then(x => {
        this.setState({ attemptedLogin: true, outcome: x })
      })

  }
  click = () => {
    fetch('http://localhost:3000/counter', {
      credentials: 'include',
      method: "POST",
    })
      .then(x => x.text())
      .then(x => this.setState({ counter: x }))

  }
  loginForm = () => {
    return (<div>
      <h1> Login form</h1>
      <input ref={r => this.username = r} placeholder="username" name="username" />
      <input ref={r => this.password = r} placeholder="password" name="password" />
      <button onClick={this.submit} > submit </button>
    </div>);
  }

  successfulLogin = () => {
    return (<div>
      {this.state.counter}
      <button onClick={this.click}>Increment the counter </button>
    </div>)
  }

  loggedIn = () => {
    return (<div>{this.state.outcome === "success" ?
      this.successfulLogin() :
      "failed login"}

    </div>);
  }
  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.attemptedLogin ? this.loggedIn() : this.loginForm()}

      </div>
    );
  }
}

export default App;

/*

/login sends back a set-cookie in the HTTP response
the fetch call to /counter sends back the cookie

*/