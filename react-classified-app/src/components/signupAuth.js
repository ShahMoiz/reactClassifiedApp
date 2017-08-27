import React from 'react';
import {Link} from 'react-router';
import TextInput from './textInput'
var firebase = require("firebase/app");

class SignupAuth extends React.Component {
    constructor(){
        super();
        this.state = {
            firstName: 'Abdul',
            lastname: 'Moiz',
            email: '',
            password: '',
            re_password: '',
            toggle: false
        }
        this.update = this.update.bind(this)
    }
    submitSignupForm(fname, lname, email, pass, rePass){
        // this.props.
        console.log(fname, lname, email, pass, rePass);
        this.setState({
            firstName: fname,
            lastname: lname,
            email: email,
            password: pass, 
            re_password: rePass
        })
        console.log(this.state.firstName)

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.re_password).catch((error) => {
            alert(error.name)
            alert(error.message)
        }).then(()=> {
            alert("SignUp Successfully")
                
                this.setState({
                    toggle: !this.state.toggle
                })
        })

    }
    // update 
    update(value, event){
        this.setState({
            [value]: event.target.value
        })
        console.log(this.state.firstName)
    }
    render(){
        return(
            <section className="container">
                <div className="row">
                <h2>Register Your Self as a Seller</h2>
                    <form action="" name="registration" onSubmit={(event) => {
                            event.preventDefault()
                            this.submitSignupForm(this.f_name.value, this.l_name.value, this.email.value, this.password.value, this.re_password.value)
                        }}>
                        <TextInput
                            label="First Name"
                            type="text"
                            placeholder="Abdul"
                            inputValue={this.state.firstName}
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
                        />
                        <TextInput
                            label="Password"
                            type="password"
                            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                            inputValue={this.state.password}
                            update={this.update.bind(null, "password")}
                        />
                        <TextInput
                            label="Retype Password"
                            type="password"
                            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                            inputValue={this.state.re_password}
                            update={this.update.bind(null, "re_password")}
                        />
                        {/* <label for="firstname">First Name</label>
                        <input type="text" name="firstname" id="firstname" placeholder="Abdul" ref={(value) => {
                            this.f_name = value
                        }}/>

                        <label for="lastname">Last Name</label>
                    <input type="text" name="lastname" id="lastname" placeholder="Moiz" ref={(value) => {
                            this.l_name = value
                        }}/> 

                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="abdul@moiz.com" ref={(value) => {
                            this.email = value
                        }}/>

                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"  ref={(value) => {
                            this.password = value
                        }}/> */}
                        {/* <TextInput
                            label="name"
                            type="text"
                            placeholder="Name"
                            inputValue={this.state.firstName}
                            update={this.update.bind(null, "firstName")}
                        />
                        <label for="password">Retype Password</label>
                        <input type="password" name="re-password" id="re-password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;" ref={(value) => {
                            this.re_password = value
                        }}/> */}
                        
                        <button type="submit">Register</button>
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