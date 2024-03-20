import './TodoEditor.css';
import { useRef, useState, useContext } from 'react';
import { TodoDispatchContext } from '../TodoContext';

export default function TodoEditor() {
  const { onCreate } = useContext(TodoDispatchContext);

  const [content, setContent] = useState('');
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const inputRef = useRef();

  const onClick = () => {
    if (content === '') {
      inputRef.current.focus(); // 빈 문자열인 경우 focus
      return;
    }
    onCreate(content);
    setContent('');
  };

  const enterHandler = (e) => {
    if (e.key === 'Enter') {
      // 혹은 e.keyCode === 13으로 써도 됨
      onClick();
    }
  };
  return (
    <div className="TodoEditor">
      <input
        ref={inputRef}
        value={content}
        onChange={onChangeContent}
        onKeyUp={enterHandler}
        placeholder="새로운 TODO..."
      />
      <button onClick={onClick}>추가</button>
    </div>
  );
}
