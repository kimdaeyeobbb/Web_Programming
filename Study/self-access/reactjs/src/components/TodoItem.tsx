export default function TodoItem({ item, index, setTodo }) {
    // item이 부모것이기 때문에 item을 바꾸는 함수는 부모에게서 받아와야 함
    const onChange = () => {
        // todo[index].completed = e.target.checked; // 부모에게서 받아온것은 바꿀수 없음
        setTodo((prevTodo) => {
            // 이전 todo를 매개변수로 명시
            const nextTodo = [...prevTodo] // 불변성을 지키기 위한 과정1
            nextTodo[index] = {...nextTodo[index]} // 불변성을 지키기 위한 과정2
            nextTodo[index].completed = e.target.check;
            // prevTodo[index] === nextTodo[index] // 같다고 나오는데 false가 되어야 함 따라서  nextTodo[index] = {...nextTodo[index]} 가 필요함
            return nextTodo
            // return값이 다음 todo가 됨
        });
        // setTodo를 그대로 넘기면 자식이 오남용할 가능성이 존재하기 때문에(위처럼 자식이 원하는대로 조작)
        // -> 부모상 onSubmit으로 setTodo를 감싸서 보내면 부모가 제안한 방식 그대로만 사용할 수 있게 되므로. 제한적인 방식임
    }
    return (
        <>
            <input type="checkbox" checked={item.completed} onChange={onChange} />
            {item.title}
        </>
    )
}