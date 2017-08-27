import React from 'react';

export default class HelloReact extends React.Component {
    title = "Welcome"
    constructor(){
        super()

        this.state = {
            firstName: '',
            lastName: '',
            newState: {
                firstName: '',
                lastName: ''
            }
        }
        this.update = this.update.bind(this)
    }

    update(key, value){
        var newState = this.state.newState
         newState[key] = value
    //    var newState = this.state[key]
        // newState = value
        this.setState({
            newState
        });
        
        // console.log("Key: ", key);
        // console.log("value: ", value);
        console.log("newState: ", this.state.newState);
    }
    render(){
        return(
            <div>
                <h1>{this.title + " " + this.state.newState.firstName + " " + this.state.newState.lastName}</h1>
                
            </div>
        )
    }
}





 class TextInput extends React.Component {
    constructor(){
        super()
        this.state ={
            isEdditing: false,
            // isEdditingFirstName: false,
            // isEdditingLastName: false,
            // firstName: '',
            // lastName: '',
        }
    }
    
    updateValue(newValue){
        this.props.update(newValue)
        this.setState({
            isEdditing: !this.state.isEdditing
        })
    }
    edit(){
        this.setState({
            isEdditing: !this.state.isEdditing
        })
        console.log(this.state.isEdditing)
    }

    render(){
        return(
            <div>
                <input type="text" ref={(value) => {
                    this.input = value
                }} disabled={!this.state.isEdditing}/>
                {
                    this.state.isEdditing ? 
                <button onClick={() => this.updateValue(this.input.value)}>Update</button> :
                <button onClick={() => this.edit()}>edit</button>    
                }  
            </div>
        )
    }
}
