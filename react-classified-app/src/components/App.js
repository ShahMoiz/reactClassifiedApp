import React, { Component } from 'react';

import AuthComponent from './auth'
// // import logo from './logo.svg';
// // import './App.css';


import HelloReact from './hello'
class App extends Component {
  title = "Hello";
  
  render(){
    return (
      <div>
        {/* <h1>{this.title}</h1> */}
           {/* <AuthComponent /> */}
           <HelloReact message="Hello"/>
      </div>  
    )
  }
}
// propTypes: {
//     title: React.propTypes.strings 
//   }
export default App;
