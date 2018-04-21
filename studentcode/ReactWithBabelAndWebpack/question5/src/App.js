import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      btn1 : true,
      btn2 : true,
    }
  }
  changeBTN = () => {
    if(this.state.btn1 === true){
      this.setState({
        btn1 : false,
        btn2 : true
      })
    }else{
      this.setState({
        btn1 : true,
        btn2 : false
      })

    }
  }

  render() {
    var bbttnn11 = this.state.btn1 === true ? <button onClick={this.changeBTN}>btn1</button> : <div></div>
    var bbttnn22 = this.state.btn2 === true ? <button onClick={this.changeBTN}>btn2</button> : <div></div>
    return (
      <div className="App">
        {bbttnn11}
        {bbttnn22}
      </div>
    );
  }
}

export default App;
