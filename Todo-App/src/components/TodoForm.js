import React, {Component} from 'react';

class TodoForm extends React.Component {
    render(){
        return(
            <div>
                <form onSubmit={this.props.addTask} >
                    <input type="text" placeholder="Enter Some Text" value={this.props.createTaskValue} onChange={
                        this.props.createTask 
                    } />
                    <button type="submit">Add Task</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;