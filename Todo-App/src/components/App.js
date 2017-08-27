import React, {Component} from 'react';


import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
class TodoApp extends Component {
  
  constructor(){
    super();
    this.appTitle = "Todo App";
    this.state = {
      tasks: [
        {
          name: "Go to School",
          complete: false,
          id: 0
        },
        {
          name: "Go To Class",
          complete: false,
          id: 1
        }
      ],
      createTask: "",
    }

    this.complete = this.complete.bind(this);
    this.addTask = this.addTask.bind(this);
    this.createTask = this.createTask.bind(this);
    this.dltTask = this.dltTask.bind(this);
    this.editTask = this.editTask.bind(this);
     }

  complete(i){
    let tasks = this.state.tasks
    let task = tasks[i]
    task.complete = !task.complete;
    this.setState({
      tasks
    })
  }
  createTask(event){
    this.setState({
       createTask: event.target.value,
    })
      
  }

  addTask(evt){
    evt.preventDefault();
    let tasks = this.state.tasks;
    let createTask = this.state.createTask;
      tasks.push({name: createTask, complete: false, id: (createTask + Math.random())});
      this.setState({
        tasks,
        createTask: ''
      })
      console.log(tasks)
  }
  editTask(i, newValue){
    let tasks = this.state.tasks;
    let task = tasks[i];
    task.name = newValue
    this.setState({
      tasks
    })
    console.log(i, newValue);
  }
  dltTask(i){
    let tasks = this.state.tasks;
    
    tasks.splice(i, 1);
    this.setState({
      tasks
    });
  }

  render(){
    return (
      <div
        className="container-fluid">
        <h1>{this.appTitle}</h1>
            <TodoForm
              createTaskValue={this.state.createTask} 
             createTask={this.createTask}
             addTask={this.addTask} />
        <section 
        className="row" > 
          {
            this.state.tasks.map((task, index) => {
              return (
                <TodoItem 
                  task={task}
                  key={task.id}
                  i={index}
                  checkbox={this.complete}
                  dltTask={this.dltTask}
                  updateTaskInput={this.updateTaskInput}
                  editTask={this.editTask}
                  editTaskValue={this.editTaskValue}
                  updateTask={this.updateTask}
                />
              )
            })
          }
        </section>
      </div>
    )
  }
}



export default TodoApp 