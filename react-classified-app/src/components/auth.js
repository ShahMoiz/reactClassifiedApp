import React from 'react';

import SignupAuth from './signupAuth'

import './css/auth.css'
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");
var firebaseui = require('firebaseui');
    var config = {
        apiKey: "AIzaSyDR6snkV1_2arfP2YGFjplo3dW-a5o1JCk",
        authDomain: "reactclassifiedapp.firebaseapp.com",
        databaseURL: "https://reactclassifiedapp.firebaseio.com",
        projectId: "reactclassifiedapp",
        storageBucket: "reactclassifiedapp.appspot.com",
        messagingSenderId: "302936753485"
        };
    firebase.initializeApp(config);


    // var uiConfig = {
    //     signInSuccessUrl: 'auth',
    //     signInOptions: [
    //       // Leave the lines as is for the providers you want to offer your users.
    //     //   firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //     //   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //     //   firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    //     //   firebase.auth.GithubAuthProvider.PROVIDER_ID,
    //       firebase.auth.EmailAuthProvider.PROVIDER_ID,
    //       firebase.auth.PhoneAuthProvider.PROVIDER_ID
    //     ],
    //     // Terms of service url.
    //     tosUrl: '<fb.com>'
    //   };

    //   // Initialize the FirebaseUI Widget using Firebase.
    //   var ui = new firebaseui.auth.AuthUI(firebase.auth());
    //   // The start method will wait until the DOM is loaded.
    //   ui.start('#firebaseui-auth-container', uiConfig);


class AuthComponent extends React.Component {
    constructor(){
        super()
        this.state= {
            username: "Username"
        }
    }
    addAuth(user, pass){
        console.log(user, pass)
        firebase.auth().createUserWithEmailAndPassword(user, pass).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("Error Code:", errorCode, "Error Message:", errorMessage )
        }).then(() => {
            return (
                <link to="/">Return Home</link>
            )
        })
    }
    renderAuthForm(){
        return(    
            <div></div>
            
        )
    }
    render(){

        return(
            <section>
                 {this.renderAuthForm()} 
                <div id="firebaseui-auth-container"></div>
            </section>
        )
    }
}

export default AuthComponent
