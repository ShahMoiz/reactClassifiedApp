import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      count: 0,
    }
  }
  componentWillMount(){
    return (console.log("componentsWillMount"))
  }
  componentDidMount(){
    return console.log("componentsDidMount")
  }
  componentWillUnmount(){
    return console.log("componentsWillUnmount")
  }

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count)
  }
  decreaseCount = () => {
    this.setState({
      count: this.state.count - 1
    })
    console.log(this.state.count)
  }

  shouldComponentUpdate(){
    if(this.state.count <= 1){
      return false
    }
    return true;
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <p>{this.state.count}</p>  
          <button onClick={this.increaseCount} className="btn btn-primary">Increace</button>          
          <button onClick={this.decreaseCount} className="btn btn-danger">Decrease</button>          
        </div>
      </div>
    );
  }
}

export default App;
