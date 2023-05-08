import React from 'react'
import Todo from './Todo';
import "../style/todoLists.css"
const TodoLists = ({ todos,setTodos }) => {
  // console.log(todos);

  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {todos.map(todo => (
          <Todo key={todo.id}  todo={todo} todoText={todo.text} setTodos={setTodos} id={todo.id}  todos={todos}/>
        ))}

      </ul>
    </div>
  )
}

export default TodoLists
