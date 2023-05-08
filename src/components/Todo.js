// import React, { useState } from 'react'
import "../style/todo.css"
const Todo = ({todoText, setTodos, todos, todo}) => {
  // const [todo, setTodo] = useState([]);

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
   }

  return (
    <div className='todo'>
      <li className='todo-item'>{todoText}</li>
      <div>
        <button className="complete-btn" type="submit">
          <i className="fas fa-check"></i>
        </button>
        <button  onClick={deleteHandler} className='trash-btn'>
          <i className="fas fa-trash"></i>
        </button>
      </div>

    </div>
  )
}

export default Todo
