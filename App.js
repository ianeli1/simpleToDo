import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: props.tasks
    }
    this.deactivateTask = this.deactivateTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
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
  render() {
    return (
      <div className="App">
        {this.state.tasks.map((task, index) => <Task a={task} id={index} deac={this.deactivateTask} del={this.deleteTask}/>)}
      </div>
    );
  }
}



function Task(props){
  function deactivate(e){
    e.preventDefault();
    props.a.active = !props.a.active
    console.log("active", props.a.name, props.a.active)
  }

  return <div className={`task ${props.a.active ? 'task-active' : 'task-inactive'}`}>
    <h3 className="task-name">{
      props.a.active ? props.a.name : <strike>{props.a.name}</strike>
      }</h3>
    <div className="options">
      <button onClick={props.del(props.id)}>D</button>
      <button onClick={props.deac(props.id)}>{props.a.active ? "A" : "NA"}</button>
      {props.a.date}
    </div>
  </div>
}


export default App;
