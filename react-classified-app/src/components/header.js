import React from 'react';
import { Link } from 'react-router';
import './css/header.css'

import $ from 'jquery'

var firebase = require('firebase/app')
export default class HeaderComponent extends React.Component {
    constructor(){
        super()
        
    }

    logout(){
        firebase.auth().signOut().then(()=>{
            console.log("signOut successfully", localStorage )
        }).catch((error) =>{
            console.log(error)
        })
    }

    componentWillMount(){
        // console.log("Componentwil Mount Work")
        // console.log(this.firebaseUser)
        const authUser = Object.keys(window.localStorage)
  .filter(item => item.startsWith('firebase:authUser'))[0]
        // console.log(authUser)
        // console.log(localStorage.key)
        if(authUser){
            return (
                <div className="collapse navbar-collapse js-navbar-collapse">
		
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">My account <span className="caret"></span></a>
                                <ul className="dropdown-menu" role="menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li className="divider"></li>
                                    <li><a href="#" onClick={this.logout}>Logout</a></li>
                                </ul> 
                            </li>
                            <li><a href="#">My cart (0) items</a></li> 
                        </ul>
	                </div>
            )
        }
        else {
            return (
            <div className="collapse navbar-collapse js-navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/signup">SignUp</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><a href="javascript:void(0)">My cart (0) items</a></li>
                        </ul>
                    </div>
            )
        }
    }

    render(){
        // console.log("Render Works")
        return(
            <div className="container-fluid">
                <div className="row">
                <nav className="navbar navbar-inverse .col-md-12">
                    <div className="navbar-header">
                        <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".js-navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link href="#" className="navbar-brand" to="/">Classified App</Link>
                    </div>
                    {
                        this.componentWillMount()
                    }
                </nav>
            </div>         
        </div>
        )
    }
}

$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');       
        }
    );
});