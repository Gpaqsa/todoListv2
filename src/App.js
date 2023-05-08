import './App.css';
import InputTodoForm from "./components/InputTodoForm.js";
import TodoLists from './components/TodoLists';
import { useState } from 'react';
function App() {
  const [input, setInput] = useState(" ");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <InputTodoForm todos={todos}  setTodos={setTodos} input={input} setInput={setInput}/>
      <TodoLists todos={todos}/>
    </div>
  );
}

export default App;
