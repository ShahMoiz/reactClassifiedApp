import React from 'react';
import TextInput from './textInput';
import {withRouter} from 'react-router'
import HeaderComponent from './header.js'
import './css/auth.css'

var firebase = require("firebase/app");
class LoginAuth extends React.Component {
    constructor(){
        super();
        this.state ={
            forms: {
                email: '',
                password: ''
            },
            errorMsg: ''
        }
        this.update = this.update.bind(this);
    }
    textInputName = [
            this.emailInput = {label: "Email",name: 'email',placeholder: "abdul@moiz.com",type: "email"},
            this.passwordInput = {label: "Password",name: 'password',placeholder: 'password123',type: "password"},
    ];

    submitLoginpForm(){
        const email = this.state.forms.email,
        pass = this.state.forms.password;
        firebase.auth().signInWithEmailAndPassword(email, pass).then(() => {
            console.log("login Successfull");
            this.props.router.push('/')
        }).catch((error) => {
            this.setState({
                errorMsg: error.message
            })
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
            <div>
                <HeaderComponent />
                <section className="container">
                    <div className="row">
                        <h2>Login Your Self as a Seller</h2>
                        <form action="" name="registration" onSubmit={(event) => {
                                event.preventDefault()
                                this.submitLoginpForm()
                            }}>
                        {
                            this.textInputName.map((textInput, index) => {
                            return(    
                                <TextInput
                                    key={index}
                                    label={textInput.label}
                                    type={textInput.type}
                                    placeholder={textInput.placeholder}
                                    inputValue={this.state.forms[textInput.name]}
                                    update={this.update.bind(null, textInput.name)}
                                />
                                )
                            })
                        }
                            <button type="submit">Login</button>
                            <p className="err">{this.state.errorMsg}</p>
                        </form>
                    </div>  
                </section>
            </div>
        )
    }
}

export default withRouter(LoginAuth)
