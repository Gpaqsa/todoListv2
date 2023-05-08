// import React, { useState } from 'react'
import "../style/todo.css"
const Todo = ({todo}) => {
  // const [todo, setTodo] = useState([]);
  return (
    <div className='todo'>
      <li className='todo-item'>{todo}</li>
      <div>
        <button className="complete-btn" type="submit">
          <i className="fas fa-check"></i>
        </button>
        <button className='trash-btn'>
          <i className="fas fa-trash"></i>
        </button>
      </div>

    </div>
  )
}

export default Todo
