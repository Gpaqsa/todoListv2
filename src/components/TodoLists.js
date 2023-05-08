import React from 'react'
import Todo from './Todo';
import "../style/todoLists.css"
const TodoLists = ({ todos }) => {
  // console.log(todos);
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {todos.map(todo => (
          <Todo todo={todo.text} id={todo.id} />
        ))}

      </ul>
    </div>
  )
}

export default TodoLists
