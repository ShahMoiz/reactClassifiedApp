import React from 'react';

export default class InputField extends React.Component {
    // constructor(){
    //     super()
    // }
    
    render(){
        return(
            <div className="form-group">
                <label>{this.props.label}</label>
                <input type={this.props.type} className="form-control" value={this.props.value} onChange={this.props.changeValue}/>
            </div>
        )
    }
}