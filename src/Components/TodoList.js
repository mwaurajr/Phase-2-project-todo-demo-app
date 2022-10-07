import React from 'react'
import TodoDIsplay from './TodoDisplay'
import Todo from './Todo';


function TodoList(todo ) {
  const todoItem = todo.map(todo =>{
    return <TodoDIsplay todo={todo} />

  }) 
  return (
    <table className="ui celled striped padded table">
    <tbody>
      <tr>
        
        <th>
          <h3 className="ui center aligned header">Description</h3>
        </th>
        
      </tr>
     {
      todoItem
     }
      
    </tbody>
  </table>
  )
}

export default TodoList
