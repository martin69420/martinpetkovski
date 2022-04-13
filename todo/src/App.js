import { useEffect, useRef, useState } from 'react';
import './bootstrap-4.4.1.css';

function App() {

  const [todos, setTodos] = useState([]);

  const todoText = useRef();

  useEffect(() => {
    const existingTodos = localStorage.getItem('todos');
    setTodos(existingTodos ? JSON.parse(existingTodos) : []);
  }, []);

  function addTodo(event) {
    if (todoText !== '') {
      event.preventDefault();
      const next = [...todos, todoText.current.value];
      setTodos(next);
      localStorage.setItem('todos', JSON.stringify(next));
      document.getElementById('todo-field').value = null;
    } else {
      console.log('No item added');
    }
  }

  function clearTodos() {
    alert("lol owned")
    setTodos();
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }

  return (
    <div class="justify-content-center align-items-center">
      <div>

        <form class="form-inline" onSubmit={addTodo}>
          <div class="form-group mb-2">
            <input id="todo-field" class="form-control" ref={todoText}/>
            <input class="btn btn-primary" type="submit" value="Add Item"/>
          </div>
        </form>
      
      </div>
      <div>

        <ul>
          {todos.map(todo => (<li key={todo}>{todo}</li>))}
        </ul>

      </div>

      <div>
        <button class="btn btn-danger" onClick={clearTodos}>DO NOT CLICK</button>
      </div>
    </div>
  );

}

export default App;
