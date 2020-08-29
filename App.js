import React from 'react';
import plus from './plus.png';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: props.tasks,
      newTask: ""
    }
    this.deactivateTask = this.deactivateTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.addTask = this.addTask.bind(this)
    this.handleNewTaskChange = this.handleNewTaskChange.bind(this)
  }
  deactivateTask(id){
    return (e) => {
      e.preventDefault()
      const newArr = [...this.state.tasks]
      newArr[id].active = !newArr[id].active
      this.setState({
        tasks: newArr
      })
    }
  }
  deleteTask(id){
    return (e) => {
      e.preventDefault()
      const newArr = [...this.state.tasks]
      newArr.splice(id, 1)  
      this.setState({
        tasks: newArr
      })
      
    }
  }
  addTask(){
    if(this.state.newTask){
      const now = new Date()
      const newTask = {
        name: this.state.newTask,
        date: ("0"+now.getDate()).slice(-2) + "-" + ("0"+now.getMonth()).slice(-2) + "-" + now.getFullYear(),
        active: true
      }
      this.setState({
        tasks: [...this.state.tasks, newTask],
        newTask: ""
      })
    }
  }
  handleNewTaskChange(event){
    this.setState({
      newTask: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.tasks.map((task, index) => <Task a={task} id={index} deac={this.deactivateTask} del={this.deleteTask}/>)}
        <TaskAdder text={this.state.newTask} onChange={this.handleNewTaskChange} submit={this.addTask}/>
      </div>
    );
  }
}



function Task(props){
  let deleted = false;
  return <div className={`task ${props.a.active ? 'task-active' : 'task-inactive'} ${deleted ? "taskDeleted" : "task"}`}>
    <h3 className="task-name">{
      props.a.active ? props.a.name : <strike>{props.a.name}</strike>
      }</h3>
    <div className="options">
      <button onClick={(e) => {
        deleted = true;
        setTimeout(props.del(props.id)(e), 500);
      }
      }>D</button>
      <button onClick={props.deac(props.id)}>{props.a.active ? "A" : "NA"}</button>
      {props.a.date}
    </div>
  </div>
}


function TaskAdder(props) {
  return (
    <div className="task taskAdder">
      <img src={plus} alt="+" id="plus" onClick={props.submit}/>
      <input className="taskInput" type="text" value={props.text} onChange={props.onChange} />
    </div>
  );
}


export default App;
