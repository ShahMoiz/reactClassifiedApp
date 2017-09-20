import React from 'react';
import HtmlCard from './htmlCard'


// var firebase = require("firebase/app")

import * as firebase from 'firebase'
    // Import Admin SDK
// var admin = require("firebase-admin");

// Get a database reference to our posts
// var db = admin.database();


export default class ContentComponent extends React.Component {
    constructor(){
        super();
        this.addAdv = this.addAdv.bind(this);
        this.firebaseDB = this.firebaseDB.bind(this);
        // this.componentWillMount = this.componentWillMount.bind(this);
        this.state = {
            adv : [
            {
                brand: "Samsung",
                model: 'Galaxy s7',
                price: 1200,
                img: '',
                negotiable: false,
                country: "Pakistan",
                city: "karachi",
                address: 'Jamshed Road',
                postalCode: 74800,
                cate: 'mobile',
                description: 'New Mobile'
                },
            {
                brand: "Samsung",
                model: 'Galaxy s7',
                price: 1200,
                img: '',
                negotiable: false,
                country: "Pakistan",
                city: "karachi",
                address: 'Jamshed Road',
                postalCode: 74800,
                cate: 'cloth',
                description: 'New Mobile'
                },
        ]
        }
    }

    // componentWillMount(){
    //     var adv = this.state.adv
    
    // adv.push({
    //             brand: "Samsung",
    //             model: 'Galaxy s7',
    //             price: 1200,
    //             img: '',
    //             negotiable: false,
    //             country: "Pakistan",
    //             city: "karachi",
    //             address: 'Jamshed Road',
    //             postalCode: 74800,
    //             cate: 'cloth',
    //             description: 'New Mobile'
    //             },)
    // this.setState({
    //     adv: adv
    // })
    // }
    // componentWillMount(){
        
    // }
addAdv(){
var ref = firebase.database().ref("posts/abdulmoiz19994/Mobile");
ref.on("value", function(snapshot) {
//   console.log(snapshot.val());
this.firebaseDB('aa')

}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
    
    
    var adv = this.state.adv
    adv.push({
                brand: "Samsung",
                model: 'Galaxy s7',
                price: 1200,
                img: '',
                negotiable: false,
                country: "Pakistan",
                city: "karachi",
                address: 'Jamshed Road',
                postalCode: 74800,
                cate: 'cloth',
                description: 'New Mobile'
                },)
    this.setState({
        adv: adv
    })
    // var adv =  this.state.adv.push({brand: "Iphone",
    //             model: 'Galaxy s7',
    //             price: 1200,
    //             img: '',
    //             negotiable: false,
    //             country: "Pakistan",
    //             city: "karachi",
    //             address: 'Jamshed Road',
    //             postalCode: 74800,
    //             cate: 'cloth',
    //             description: 'New Mobile'},
    // )
                // this.setState({
                //     adv: adv
                // })

    console.log(adv)
}
firebaseDB(value) {
    console.log("Firebase Value", value)
}

    // this.firebaseDB()
    render(){
        return(
            <div>
                {
                    this.state.adv.map((mobile) => {
                       return ( <HtmlCard 
                        name={mobile.brand +  " " + mobile.model}
                        brand={mobile.brand}
                        price={mobile.price}
                        description={mobile.description}
                        img={mobile.img}
                        cate={mobile.cate}
                        />
                       )
                    }
                    )
                    } 
                
                <button onClick={this.addAdv }>Add More Advertisement</button>
            </div>
        )
    }
}

