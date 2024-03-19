import './TodoList.css';
import TodoItem from './TodoItem.jsx';
import { useMemo, useState } from 'react';

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

  // todo 분석
  const getAnalyzedTodos = () => {
    console.log('투두 분석 함수 호출 !');
    const totalCount = todos.length; // 길이가 길어질수록 연산 증가
    const doneCount = todos.filter((todo) => todo.isDone).length; // filter -> 길이가 길어질수록 연산량 증가 (변경되지 않는다면 그대로 두는게 좋다)
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  };

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log('투두 분석 함수 호출 !');

    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);
  // deps -> todos -> 얘가 바뀔 때에만 연산을 다시 수행

  // getAnalyzedTodos(); // 이렇게 호출하면 렌더링 될떄마다 호출됨

  return (
    <div className="TodoList">
      <h4>Todos</h4>
      <div>
        <div>전쳬: {totalCount}</div>
        <div>완료: {doneCount}</div>
        <div>미완: {notDoneCount}</div>
      </div>
      <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
      <div className="todos_wrapper">
        {filteredTodos().map((todo) => (
          <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}
