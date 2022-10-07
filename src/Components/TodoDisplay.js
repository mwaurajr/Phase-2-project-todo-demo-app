import React from 'react'

function TodoDIsplay( { todo }) {
  const { item, complete} = todo
console.log (todo)
  return (
   <tr>
    <td> {item} </td>
    <td> {complete} </td>
   </tr>
  )

}

export default TodoDIsplay