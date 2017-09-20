import React, { Component } from 'react';
import HeaderComponent from './header.js';
import ContentComponent from './content.js';

class App extends Component {
  title = "Hello";
  
  render(){
    return (
      <div>
           <HeaderComponent />
          <ContentComponent />
      </div>  
    )
  }
}
export default App;

