import React, { Component } from 'react';

import InputField from './textInput'
class App extends Component {
  constructor(){
    super();
    this.state = {
      email: 'abc@xyz.com',
      password: '12345'
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this)
  }

  onChange(value, event){
    this.setState({
      [value]: event.target.value
    })
    
  }

  submitForm(event){
    event.preventDefault()
    console.log(this.state.email)
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <form onSubmit={ this.submitForm} className=".col-sm-12 .col-sm-12 .col-sm-12">
            
            <InputField 
                type="email"
                label="Enter Email"
                value={this.state.email}
                changeValue={this.onChange.bind(this, 'email')}/>
            <InputField 
                type="password"
                label="Enter password"
                value={this.state.password}
                changeValue={this.onChange.bind(this, 'password')}/>

            <button className="btn btn-primary">Submit <span className="glyphicon glyphicon-ok"></span></button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
