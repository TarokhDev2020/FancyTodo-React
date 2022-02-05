import React from 'react'
import TodoForm from './components/todo/TodoForm';
import {Provider} from 'react-redux';
import store from './store';
import './App.css';

const App = () => {
  return (
    <Provider store = {store}>
      <div className = "App">
        <div className = "container">
          <div className = "heading">
          <img className="heading__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg" alt = ""/>
          <h1 className = "heading__title">To-Do List</h1>
          </div>
          <TodoForm/>
        </div>
      </div>
    </Provider>
  )
}

export default App
