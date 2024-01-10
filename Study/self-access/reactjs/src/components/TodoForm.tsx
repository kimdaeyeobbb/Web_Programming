import {useState} from "react";

export default function TodoForm({onSubmit: onParentSubmit}){
    // setTodo를 가지고있는 onSubmit자체를 부모가 보내고 이것을 여기서 받음. -> onParentSubmit으로 props 이름 변경
    const [newTodo, setNewTodo] = useState('')
    const onChangeNewTodo = (e) => {
        setNewTodo(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault(); // 페이지 새로고침 방지 (form은 제출시 기본적으로 새로고침)
        onParentSubmit(newTodo)
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <input value={newTodo} onChange={onChangeNewTodo}/>
                <button>추가</button>
            </form>
        </>
    )
}