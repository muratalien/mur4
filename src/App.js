import './App.css';
import { useState } from 'react';
import TodoItem from './components/TodoItem';

function App() {
  const [todoArr, setTodoArr] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  

  function addTodoList(event) {
    event.preventDefault();
    setTodoArr([todoInput, ...todoArr]);
  }

  function RemoveAll(event) {
    event.preventDefault();
    setTodoArr([todoArr, TodoItem, setTodoArr]);
    for (let i = 0; i < todoArr.length; i++) {
      todoArr[i].remove();
      TodoItem[i].remove();
    }
}

  function changeInputHandler(event){
    setTodoInput(event.target.value);
  }

  return (
      <main>
        <div className='form-container'>
          <form>
            <input className='form-control w-75 m-5 mb-2' onChange={changeInputHandler} placeholder='add todo item' />
            <button className='btn btn-primary w-75 m-5 mb-1 mt-0' onClick={addTodoList}>Add</button>
            <button className='btn btn-danger w-75 m-5 mt-0' onClick={RemoveAll}>Clear All</button>
          </form>
        </div>
        <div className='container'>
          <div className='row w-75'>
            {todoArr.map(n => <TodoItem content={n} />)}
          </div>
        </div>
      </main>
  );
}

export default App;
