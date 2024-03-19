import './App.css';
import Header from './components/Header.jsx';
import TodoEditor from './components/TodoEditor.jsx';
import TodoList from './components/TodoList.jsx';
import { useReducer, useRef } from 'react';
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
  function reducer(state, action) {
    switch (action.type) {
      case 'CREATE':
        return [...state, action.data];
      case 'UPDATE':
        return state.map((todo) => {
          return todo.id === action.data ? { ...todo, isDone: !todo.isDone } : todo;
        });
      case 'DELETE':
        return state.filter((todo) => todo.id !== action.data);
    }
  }

  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // create
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      createdDate: new Date().getTime(),
    };
    dispatch({
      // action객체 -> 어떻게 state를 전달할것인지에 대한 정보
      type: 'CREATE',
      data: newTodo,
    });
  };

  // update
  const onUpdate = (targetId) => {
    dispatch({
      type: 'UPDATE',
      data: targetId,
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: 'DELETE',
      data: targetId,
    });
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
