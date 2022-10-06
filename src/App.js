import React, { useState, useEffect } from 'react'
import './App.css';
import TodoList from './Components/TodoList';



function App() {
  const [todo, setTodo] = useState([])

useEffect (() =>{
  fetch('http://localhost:3000/todoexp')
  .then((response) => response.json())
  .then (todo => setTodo(todo))
}, [])
console.log(todo)


  return (
    <div className="todo-app">
     
      <TodoList todo={todo} />
      
    </div>
  );
}

export default App;
