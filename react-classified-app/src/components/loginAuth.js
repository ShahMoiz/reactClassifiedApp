import React from 'react';
import TextInput from './textInput';


var firebase = require("firebase/app");
export default class LoginAuth extends React.Component {
    constructor(){
        super();
        this.state ={
            forms: {
                email: '',
                password: ''
            }
        }
        this.update = this.update.bind(this);
    }
    submitLoginpForm(){
        let email = this.state.forms.email,
        pass = this.state.forms.password
        console.log("submitLoginpForm Works");
        firebase.auth().signInWithEmailAndPassword(email, pass).then(() => {
            console.log("login Successfull");
        }).catch((error) => {
            error.code
            error.error
        })
    }
    update(value, event){
        this.state.forms[value] = event.target.value
        this.setState({
            forms: this.state.forms
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
                            label="Email"
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