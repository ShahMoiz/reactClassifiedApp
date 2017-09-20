    import React from 'react';export default class TextInput extends React.Component {
    render(){
        return(
            <section>
                <label>{this.props.label}</label>
            <input type={this.props.type}
             name={this.props.name}
              value={this.props.inputValue}
               placeholder={this.props.placeholder}
                onChange={(e) => this.props.update(e)} required/>
            </section>
)

}
}