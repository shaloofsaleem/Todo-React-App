import React , { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Todo from './Components/TodoList/Todo';
import AddForm from './Components/TodoForm/AddForm';
import UpdateForm from './Components/UpdateForm.jsx/UpdateForm';

function App() {
  return (
    <>
    <div className="container App">
      <h2>To Do List App (ReactJS)</h2>
      <AddForm/>
      <UpdateForm/>
      <Todo/>

    </div>
    </>
  )
}

export default App
