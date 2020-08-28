import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let testTasks = [
  {
    name: "Clean the dishes",
    date: "12-03-2019",
    active: true
  },
  {
    name: "Study ReactJS",
    date: "28-09-2020",
    active: true
  },
  {
    name: "Feed the cat",
    date: "23-54-2124",
    active: false
  }
]

ReactDOM.render(
  <React.StrictMode>
    <App tasks={testTasks}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
