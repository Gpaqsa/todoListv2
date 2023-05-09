// import React, { useState } from 'react'
import "../style/todo.css"
const Todo = ({todoText, setTodos, todos, todo}) => {
  // const [todo, setTodo] = useState([]);

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
   }

   const completedHandler = () => {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item, completed: !item.completed
        }
      }
      return item;
    }))
   }
  return (
    <div className='todo'>
      <li className={`todo-item ${todo.completed ? "completed" : " "}`}>{todoText}</li>
      <div>
        <button onClick={completedHandler} className="complete-btn" type="submit">
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
