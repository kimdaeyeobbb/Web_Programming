import './App.css';
import Header from './components/Header.jsx';
import TodoEditor from './components/TodoEditor.jsx';
import TodoList from './components/TodoList.jsx';
import { useRef, useState } from 'react';
function App() {
  const mockData = [
    {
      id: 0,
      content: 'React 공부',
      createdDate: new Date().getTime(),
      isDone: false,
    },
    {
      id: 1,
      content: 'Next.js 공부',
      createdDate: new Date().getTime(),
      isDone: false,
    },
    {
      id: 2,
      content: 'Node.js 공부',
      createdDate: new Date().getTime(),
      isDone: true,
    },
  ];
  const [todos, setTodos] = useState(mockData);

  const idRef = useRef(3);

  // create
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      createdDate: new Date().getTime(),
    };
    setTodos([...todos, newTodo]);
  };

  // update
  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo;
      }),
    );
  };

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
