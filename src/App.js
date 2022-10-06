import React from 'react'
import './App.css';
import TodoList from './Components/TodoList';
import NavBar from './Components/NavBar';
import "./styles.css"
import Home from './Components/Home';
import About from './Components/About';
import { Routes, Route} from "react-router-dom"




function App() {

  return (
    <div className="todo-app">
     <NavBar />
      <TodoList />
      <Routes> 
        <Route path='/' element={<Home />}  />
        <Route path='/about' element={<About />}  />
      </Routes>
    </div>
  );
}

export default App;
