import React from 'react';
import {Link} from 'react-router';
import TextInput from './textInput';
import HeaderComponent from './header.js';
import * as firebase from 'firebase';
// var firebase = require("firebase/app");

var config = {
    apiKey: "AIzaSyDR6snkV1_2arfP2YGFjplo3dW-a5o1JCk",
    authDomain: "reactclassifiedapp.firebaseapp.com",
    databaseURL: "https://reactclassifiedapp.firebaseio.com",
    projectId: "reactclassifiedapp",
    storageBucket: "reactclassifiedapp.appspot.com",
    messagingSenderId: "302936753485"
  };
  firebase.initializeApp(config);
class SignupAuth extends React.Component {
    
    constructor(){
        super();
        this.state = {
            forms: {
                firstName: 'Abdul',
                lastName: '',
                email: '',
                password: '',
                re_password: '',
            },
            
            toggle: false,
            errorMsg: ''
        }
        this.submitSignupForm = this.submitSignupForm.bind(this)
        this.update = this.update.bind(this)
    }

    textInputName = [
            this.firstNameInput = {label: "First Name",name: 'firstName',placeholder: "Abdul",type: "text"},
            this.lastNameInput = {label: "Last Name",name: 'lastName',placeholder: "Moiz",type: "text"},
            this.emailInput = {label: "Email",name: 'email',placeholder: "abdul@moiz.com",type: "email"},
            this.passwordInput = {label: "Password",name: 'password',placeholder: 'password123',type: "password"},
            this.rePassInput = {label: "Retype Password",name: 're_password',placeholder: "password123",//&#9679;
                type: "password",
            }   
    ];

    submitSignupForm(){
        let re_pass = this.state.forms.re_password,
        pass = this.state.forms.password,
        email = this.state.forms.email;
        let username = email.substring(0, email.indexOf("@"))
        if(pass === re_pass){
            console.log("Password: ", pass , "email: ", email);
            firebase.auth().createUserWithEmailAndPassword(email, pass).then(()=> {
            alert("SignUp Successfully")
                firebase.database().ref('signup/' + username).set({
                    firstName: this.state.forms.firstName,
                    lastName : this.state.forms.lastName,
                    username : username,
                    email    : email,
                    password : re_pass
                })
                this.setState({
                    toggle: !this.state.toggle
                })
        }).catch((error) => {
            alert(error.code)
            alert(error.message)
            this.setState({
                errorMsg: error.message    
            })
    })
        }
        else {
            this.setState({
                errorRePassMsg: "Password Does Not Match"
            })
        }
        

    } 
    update(value, event){
        this.state.forms[value] = event.target.value
        this.setState({
            forms: this.state.forms
        })
    }
    render(){
        return(
            <div>
                <HeaderComponent />
            <section className="container">
                <div className="row">
                <h2>Register Your Self as a Seller</h2>
                    <form action="" name="registration" onSubmit={(event) => {
                            event.preventDefault()
                            console.log("Submit Works")
                             this.submitSignupForm() 
                        }}>
                        {
                            this.textInputName.map((textInput, index) => {
                            return(    <TextInput
                                    key={index}
                                    label={textInput.label}
                                    type={textInput.type}
                                    placeholder={textInput.placeholder}
                                    inputValue={this.state.forms[textInput.name]}
                                    update={this.update.bind(null, textInput.name)}
                                />)
                            })
                        }
                        <button type="submit">Register</button>
                        <p className="err">{this.state.errorMsg}</p>
                            {
                        this.state.toggle ? <Link to="/login">Click to login</Link> : ''
                    }
                    </form>
                    
                </div>  
            </section>
            </div>
        )
    }
}

export default SignupAuth

