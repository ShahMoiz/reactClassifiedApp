import React from 'react';
import $ from 'jquery';
import {withRouter} from 'react-router';
import TextInput from './textInput';
import HeaderComponent from './header';
import ContentComponent from './content.js'

var firebase = require('firebase/app')
class AddAdv extends React.Component{
    
//     username(){
//         var userId = firebase.auth().currentUser.uid;
// return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
//   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//   console.log(username)
// });
    // }
    constructor(){
        super()
        this.state = {
            mobiletoggle: true,
            bookstoggle: false,
            // username: 'Abdul Moiz',
            forms: {
                addTitle: 'Samsung Galaxy s6',
                price: '10000',
                description: 'nice phone',
                country: "Pakistan",
                city: "Karachi",
                phoneNumber: '030021521',
                img: '',
                brand: 'samsung',
                model: 's6 edge',
                autherName: 'john dunkit',
                bookPages: '464-pages',
                category: ''
                // condition: '',
                // negotiable: true,
                // address: '',
                // postalCode: '',
                // cate: '',
            },
            cate: ['Mobile', 'Books']
        }
        this.update = this.update.bind(this);
        this.createAdd = this.createAdd.bind(this);
        this.inputValue = this.inputValue.bind(this);
        this.changeInput = this.changeInput.bind(this)
        // this.componentWillMount = this.componentWillMount.bind(this)
    }
    textInputName = [
            // this.firstNameInput = {label: "Username",name: 'username',placeholder: "Samsung",type: "text"},
            this.firstInput = {label: "Add Title",name: 'addTitle',placeholder: "Samsung Galaxy s7 in good Condition",type: "text"},
            this.scndInput = {label: "Price",name: 'price',placeholder: "12000",type: "number"},
            // this.scndInput = {label: "Describe your Product",name: 'price',placeholder: "describe your product",type: "textarea"},
            this.thridInput = {label: "Country",name: 'country',placeholder: 'Pakistan',type: "text"},
            this.fourthInput = {label: "City",name: 'city',placeholder: "Karachi",type: "text",},
            this.fourthInput = {label: "Phone Number",name: 'phoneNumber',placeholder: "0300-******12",type: "number",},
            this.fifthInput = {label: "Choose Image",name: 'img',placeholder: "",type: "file",}
    ];
        textMobileField =[
            this.firstNameInput = {label: "Brand",name: 'brand',placeholder: "Samsung",type: "text"},
            this.lastNameInput = {label: "Model",name: 'model',placeholder: "Galaxy s7 edge",type: "text"},
            
        ];
        textBooksField =[
            this.firstNameInput = {label: "Auther Name",name: 'autherName',placeholder: "john Dunkit",type: "text"},
            this.lastNameInput = {label: "Pages",name: 'bookPages',placeholder: "434-pages",type: "text"},
            
        ]
        stateCate = ''
    update(value, event){
        this.state.forms[value] = event.target.value
        this.setState({
            forms: this.state.forms
        })
        console.log(this.state.forms)
    }
    createAdd(){
        console.log("create Add Works")
        // firebase.database().ref('Advertisement/' + this.category)
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                let username = user.email.substring(0, user.email.indexOf('@'))
                if(this.stateCate === "Mobile"){
                firebase.database().ref('posts/' + username + '/' + this.stateCate).set({
                    addTitle: this.state.forms.addTitle,
                    price: this.state.forms.price,
                    description: this.state.forms.description,
                    country: this.state.forms.country,
                    city: this.state.forms.city,
                    phoneNumber: this.state.forms.phoneNumber,
                    img: this.state.forms.img,
                    brand: this.state.forms.brand,
                    model: this.state.forms.model,
                    // autherName: '',
                    // bookPages: '',
                    category: this.stateCate,

                })
                this.props.router.push('/')

                }
            else if(this.stateCate === "Books"){
                // firebase.storage.ref().child(this.state.forms.img)
                firebase.database().ref('posts/' + username + '/' + this.stateCate ).set({
                    addTitle: this.state.forms.addTitle,
                    price: this.state.forms.price,
                    description: this.state.forms.description,
                    country: this.state.forms.country,
                    city: this.state.forms.city,
                    phoneNumber: this.state.forms.phoneNumber,
                    img: this.state.forms.img,
                    // brand: this.state.brand,
                    // model: this.state.model,
                    autherName: this.state.forms.autherName,
                    bookPages: this.state.forms.bookPages,
                    category: this.stateCate,

                })
                    alert("Your Add is submit")
                    this.props.router.push('/')
                
                
            }

                console.log("Create Add Successfully with login id is", username)
            }
            else {
                console.log("User is not Loginin Please Login First")
            }
            // user ? console.log("Create Add Successfully with login id is", user.email) : console.log("User is not Loginin Please Login First")
        })
    }
//     checkFirebaseUser(){
//         console.log("checkFirebaseUser Works")
//         firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     console.log("user email", user.email)
//     this.setState({
//         username: user.email
//     });
//     console.log("State Username", this.state.username)
//   }
// });
    // }
    // func(){
    //     var a = []
    //     for(var i = 0; i <= 5; i++){
    //         a.push(i)
    //     }
    // }
    changeInput(cate){
        // console.log("Select Category")
        // let e = document.getElementById('cate').selectedIndex
        // let cate  = this.refs.cate
        console.log("Category name", cate)
        if(cate == "Mobile"){
            this.stateCate =  cate            
                this.setState({
                    mobiletoggle: true,
                    bookstoggle: false,
                    // category: mobile
                })


                console.log("state Category", this.stateCate)
            // this.inputValue(textInput, index)
            // console.log("Text Input", textInput)
        }
        else if(cate == "Books"){
            this.stateCate =  cate            
            // console.log("Books cate", cate)
            this.setState({
                    mobiletoggle: false,
                    bookstoggle: true,
                    // category: book
                })
                console.log("state Category", this.stateCate)
        }
        // var strUser = e.options[e.selectedIndex].value;
        // console.log("Option value", document.getElementsByTagName('options')[e].value)
        // if(cate)
    }
    inputValue(textInput, index){
        console.log("Another text input", textInput)
        
        // return (
        //     <p>Hello</p>
        // )
    }
    render(){
        return(
            <div>
                <HeaderComponent />
            <section className="container">
                <div className="row">
                <h2>Create Your Add</h2>
                    <form
                         name="registration" onSubmit={(event) => {
                            event.preventDefault()
                            this.createAdd()
                            {/* console.log("Submit Works") */}
                             {/* this.submitSignupForm()  */}
                        }}>
                        {/* <input type="text" value={this.state.username} disabled/> */}
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
                        <label htmlFor="">Brefily Describe your Product</label>
                        <textarea rows="4" cols="62" placeholder="Describe your Product" onChange={this.update.bind(null, 'description')} value={this.state.forms.description} style={{color: 'black'}}>
                        </textarea>
                        <label htmlFor="">Category</label>
                        <select onChange={ () =>this.changeInput(this.select.value)} style={{color: 'black'}} ref={(value) => {
                            this.select = value
                        }}>
                            {
                                this.state.cate.map((cate) => {
                                    return (
                                        <option key={cate} style={{color: 'black'}} value={cate}>{cate}</option>
                                    )
                                })
                            }
                        </select>
                        
                          {
                              this.state.mobiletoggle ? 
                              this.textMobileField.map((textInput, index) => {
                return(    <TextInput
                    key={index + 1}
                     label={textInput.label} 
                    type={textInput.type}
                    placeholder={textInput.placeholder}
                    inputValue={this.state.forms[textInput.name]}
                    update={this.update.bind(null, textInput.name)}
                />)
                               }) : ''
                              
                          }
                          {
                              this.state.bookstoggle ? 
                              this.textBooksField.map((textInput, index) => {
                return(    <TextInput
                    key={index + 1}
                     label={textInput.label} 
                    type={textInput.type}
                    placeholder={textInput.placeholder}
                    inputValue={this.state.forms[textInput.name]}
                    update={this.update.bind(null, textInput.name)}
                />)
                               }) : ''
                              
                          } 
                        
                        <button type="submit">Add Advertise</button>
                    </form>
                        {/* <button type="submit" onClick={() => {this.checkFirebaseUser}} >check Firebase User</button> */}
                    
                </div>  
            </section>
            </div>
        )
    }
}


export default withRouter(AddAdv)