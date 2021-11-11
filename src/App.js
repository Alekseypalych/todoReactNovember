import { useState } from 'react';
import { ToDo } from './ToDo';
import { ToDoForm } from './ToDoForm';

export function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false,
      }
      setTodos([...todos, newItem])
    }
  };

  const handleRemoveTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  };

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      )
    ])
  };

  //не до конца понимаю как в addTask попадает userInput ? А именно: userInput изначально объявлен в компоненте ToDoForm в хуке const [userInput, setUserInput] = useState(''). Правильно понимаю, что userInput прокидывается вверх, тк userInput в компоненте ToDoForm а последняя в свою очередь лежит в компоненте App.js и userInput могут использовать все, кто внутри App.js ?
  return (
    <div className="App">
      <header>
        <h1>
          Список задач : {todos.length}
        </h1>
      </header>
      <ToDoForm onAddTask={handleAddTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            onToggleTask={handleToggle}
            onRemoveTask={handleRemoveTask}
          />
        )
      })}
    </div>
  );
}
