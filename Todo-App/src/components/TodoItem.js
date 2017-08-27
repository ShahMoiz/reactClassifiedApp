import React from 'react';


export default class TodoItem extends React.Component {
 constructor(props){
   super(props);

  this.state =  {
    isEdditing: false,
    updateTask: ""
  }
  this.toggleState = this.toggleState.bind(this);
  this.updateItem = this.updateItem.bind(this);
  
 } 

  renderDisplay(){
    return(
      <div
        className={this.props.task.complete ? 'completed': ''}
        className="col-sm-2 card"
      >
        <input 
          type="checkbox" 
          onChange={() =>
            this.props.checkbox(this.props.i)
          }
        />
          <p>{this.props.task.name}</p>
        <button
          className="btn btn-danger "
          onClick={() => {
            this.props.dltTask(this.props.i) }
          }
        >Delete Task</button>
        <button 
          className="btn btn-info"
          onClick={() => {
            this.toggleState()
          }}
        >Edit Task</button>
      </div>
    )
  }

  toggleState(){
    const {isEdditing} = this.state;
    this.setState({
      isEdditing: !isEdditing
    });
    console.log("editing", isEdditing)
  }

  updateItem(evt){
    evt.preventDefault();
    console.log(this.input.value);
    this.props.editTask(this.props.i, this.input.value);
    this.toggleState();
  }
  renderUpdateForm(){
    return (
        <form  className="card"
          onSubmit={this.updateItem}
        >
          <input 
            type="text"
            ref={(value) => {
              this.input = value
            }}
            defaultValue={this.props.task.name}/>

          <button type="submit">Update Task</button>

        </form>
      )
  }
  render(){
    const {isEdditing} = this.state;
    return (isEdditing ? this.renderUpdateForm() : this.renderDisplay())
  }
}