import React from 'react';
import {Link} from 'react-router';
import TextInput from './textInput';
var firebase = require("firebase/app");

class SignupAuth extends React.Component {
    textInputName = [
            this.firstInput = {
                label: "First Name",
                name: 'firstName',
                placeholder: "Abdul",
                type: "text",
                value: ''
            },
            this.secondInput = {
                label: "Last Name",
                name: 'lastName',
                placeholder: "Moiz",
                type: "text",
                value: ''
            }
        // label: ['FirstName', 'Last Name', 'Email', 'Password', 'Retype password'],
        // placeholder: ['Abdul', 'Moiz', 'abdul@moiz.com', '&#9679;&#9679;&#9679;&#9679;&#9679;' , '&#9679;&#9679;&#9679;&#9679;&#9679;']
    ]
        // label: ['FirstName', 'Last Name', 'Email', 'Password', 'Retype password'],
        // type: ['text', 'text', 'email', 'password', 'password'],
        // placeholder: ['Abdul', 'Moiz', 'abdul@moiz.com', '&#9679;&#9679;&#9679;&#9679;&#9679;' , '&#9679;&#9679;&#9679;&#9679;&#9679;']
    // ]
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
            errorEmailMsg: '',
            errorPassMsg: '',
            errorRePassMsg: '',
            errorMsg: ''
        }
        this.submitSignupForm = this.submitSignupForm.bind(this)
        this.update = this.update.bind(this)
    }
    submitSignupForm(){
        let re_pass = this.state.forms.re_password,
        pass = this.state.forms.password,
        email = this.state.forms.email;
        // // console.log("Password: ",pass)
        // // console.log("Retype Password: ",re_pass)
        if(pass == re_pass){
            console.log("Password: ", pass , "email: ", email);
            firebase.auth().createUserWithEmailAndPassword(email, re_pass).then(()=> {
            alert("SignUp Successfully")
                
                this.setState({
                    toggle: !this.state.toggle
                })
        }).catch((error) => {
            alert(error.code)
            alert(error.message)
            this.setState({
                errorMsg: error.message    
            })
            // if(error.code == "auth/weak-password"){
            //     this.setState({
            //     errorPassMsg: error.message
            // })
            // }
            // else {
            //     console.log("Password Does Not Same")
            // this.setState({
            //     errorEmailMsg: error.message
            // })
        // }
    })
        }
        else {
            this.setState({
                errorRePassMsg: "Password Does Not Match"
            })
            // alert("Password Does Not Match")
        }
        // console.log("this.state.firstName")
        

        

    }
    // update 
    update(value, event){
        this.state.forms[value] = event.target.value
        this.setState({
            forms: this.state.forms
        })
        console.log(this.state.forms)
    }
    render(){
        return(
            <section className="container">
                <div className="row">
                <h2>Register Your Self as a Seller</h2>
                    <form action="" name="registration" onSubmit={(event) => {
                            event.preventDefault()
                            console.log("Submit Works")
                             this.submitSignupForm() 
                        }}>
                        {
                            this.textInputName.map((textInput) => {
                            return(    <TextInput
                                    label={textInput.label}
                                    type={textInput.type}
                                    placeholder={textInput.placeholder}
                                    inputValue={this.state.forms[textInput.name]}
                                    update={this.update.bind(null, textInput.name)}
                                />)
                            })
                        }
                         {/* <TextInput
                            label="First Name"
                            type="text"
                            placeholder="Abdul"
                            inputValue={this.state.forms.firstName}
                            update={this.update.bind(null, "firstName")}
                        />
                        <TextInput
                            label="Last Name"
                            type="text"
                            placeholder="Moiz"
                            inputValue={this.state.lastname}
                            update={this.update.bind(null, "lastName")}
                        />
                        <TextInput
                            label="email"
                            type="email"
                            placeholder="abdul@moiz.com"
                            inputValue={this.state.email}
                            update={this.update.bind(null, "email")}
                        /> */}
                        {/* <p className="err">{this.state.errorEmailMsg}</p> */}
                        {/* <TextInput
                            label="Password"
                            type="password"
                            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                            inputValue={this.state.password}
                            update={this.update.bind(null, "password")}
                        /> */}
                        {/* <p className="err">{this.state.errorPassMsg}</p> */}
                        {/* <TextInput
                            label="Retype Password"
                            type="password"
                            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                            inputValue={this.state.re_password}
                            update={this.update.bind(null, "re_password")}
                        />  */}
                        {/* <p className="err">{this.state.errorRePassMsg}</p> */}
                        
                        <button type="submit">Register</button>
                        <p className="err">{this.state.errorMsg}</p>
                            {
                        this.state.toggle ? <Link to="/login">Click to login</Link> : ''
                    }
                    </form>
                    
                </div>  
            </section>
        )
    }
}

export default SignupAuth