import React from 'react';

import TextInput from './textInput';

export default class LoginAuth extends React.Component {
    constructor(){
        super();
        this.state ={
            email: '',
            password: ''
        }
        this.update = this.update.bind(this)
    }
    submitLoginpForm(){
        console.log("submitLoginpForm Works")
    }
    update(value, event){
        this.setState({
            [value]: event.target.value
        })
        console.log(this.state.email)
    }
    render(){
        return(
            <section className="container">
                <div className="row">
                <h2>Login Your Self as a Seller</h2>
                    <form action="" name="registration" onSubmit={(event) => {
                            event.preventDefault()
                            this.submitLoginpForm()
                        }}>
                        <TextInput
                            label="email"
                            type="email"
                            placeholder="abdul@moiz.com"
                            inputValue={this.state.email}
                            update={this.update.bind(null, "email")}
                        />
                        <TextInput
                            label="Password"
                            type="password"
                            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                            inputValue={this.state.password}
                            update={this.update.bind(null, "password")}
                        />
                    <button type="submit">Register</button>
                            
                    </form>
                    
                </div>  
            </section>
        )
    }
}