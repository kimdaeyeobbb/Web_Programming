import {useEffect, useState} from "react";
import TodoForm from "./components/TodoForm.tsx";
import TodoItem from "./components/TodoItem.tsx";

function App() {
  // const [count, setCount] = useState(0)
    const [todo, setTodo] = useState([])

    useEffect(() => {
        // todo가 바뀌었는지 감지하는 함수
    }, [todo]);
    const onSubmit = (newTodo) =>  {  // newTodo를 위해 고차함수로 만들어서 인자로 전달
        // e.preventDefault(); // 페이지 새로고침 방지 (form은 제출시 기본적으로 새로고침)
        const nextTodo = [...todo, {title: newTodo, completed: true, id: Math.random()}] // 참조 관계를 끊음 (todo !== nextTodo)
        setTodo(nextTodo)        // setTodo에 넣는 todo는 기존 todo와 다른 todo여야 함
        // console.log(todo); // 여기서는 state인 todo가 바뀌지 않음 (비동기 때문이 아니라 batch 때문) -> useEffect로 바뀐 결과물 확인
    }

  return (
      // <></> : 빈껍데기, fragment
    <>
        <div>
            {todo.length === 0 ? (
                <div>
                    <div>할일을 추가해보세요</div>
                    {/* prop으로 함수의 호출이 아닌 함수 자체를 넘겨주어야 한다*/}
                   <TodoForm onSubmit={onSubmit} />
                </div>
            ): (
                <>
                {todo.map((t, i)=> (<TodoItem key={t.id} index={i} item={t} setTodo={setTodo}/>))}
                    {/* onSubmit대신 setTodo자체를 넘겨주는 이유? */}
                    {/*onSubmit은 부모의 state를 바꿀 때 함수를 호출하고 나서 함수자체를 넘기는 반면 setTodo는 setTodo자체를 그대로 넘김*/}
                    <TodoForm onSubmit={onSubmit} />
                </>
            )}
        </div>
    </>
  )
}

export default App
