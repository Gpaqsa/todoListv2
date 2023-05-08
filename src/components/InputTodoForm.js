import React from 'react'
// import { useState } from 'react';
import "../style/inputTodoForm.css"

const InputTodoForm = ({ input, setInput, todos, setTodos }) => {

  const handleTaskInputChange = (e) => {
    setInput(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // setInput(input);
    setTodos([...todos,
    { text: input, completed: false, id: Math.random() * 1000 }]);
    setInput(" ")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='input-div'>
        <input className="input-item" type='text' placeholder='New Note' onChange={handleTaskInputChange} value={input} />
        <div className='addButton-div'>
          <button className='addTodoItemBtn' onClick={handleSubmit}>+</button>
        </div>
      </div>
    </form>
  )
}

export default InputTodoForm
