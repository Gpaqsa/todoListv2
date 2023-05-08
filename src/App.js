import './App.css';
import InputTodoForm from "./components/InputTodoForm.js";
import TodoLists from './components/TodoLists';
import { useState } from 'react';
function App() {
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <InputTodoForm setInput={setInput} />
      <TodoLists/>
    </div>
  );
}

export default App;
