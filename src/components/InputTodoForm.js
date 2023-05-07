import React from 'react'
import { useState } from 'react';
import "../style/inputTodoForm.css"

const InputTodoForm = () => {
  const [input, setInput] = useState("");

  const handleTaskInputChange = (e) => {
    setInput(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // setInput(input);
    setInput(" ");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='input-div'>
        <input className="input-item" value={input} type='text' placeholder='New Note' onChange={handleTaskInputChange} />
        <div className='addButton-div'>
          <button className='addTodoItemBtn'>+</button>
        </div>
      </div>
    </form>
  )
}

export default InputTodoForm
