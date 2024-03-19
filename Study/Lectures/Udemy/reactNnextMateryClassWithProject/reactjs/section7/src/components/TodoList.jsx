import './TodoList.css';
import TodoItem from './TodoItem.jsx';
import { useState } from 'react';

export default function TodoList({ todos, onUpdate, onDelete }) {
  // 입력한 메시지 보관
  const [search, setSearch] = useState('');
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  // 입력 결과 필터링
  const filteredTodos = () => {
    if (search === '') {
      return todos;
    }
    return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()));
  };
  return (
    <div className="TodoList">
      <h4>Todos</h4>
      <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
      <div className="todos_wrapper">
        {filteredTodos().map((todo) => (
          <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}
