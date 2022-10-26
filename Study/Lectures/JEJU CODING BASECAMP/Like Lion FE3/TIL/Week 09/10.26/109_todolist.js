class Todo {
    /* 내용, 상태 2가지 프로퍼티 */
    constructor(contents, state = false) {
        this.contents = contents
        this.state = state
    }

    /* 상태 변경 - 실행시 완료로 바뀜*/
    changeState() {
        this.state = !(this.state)
        return (`현재 상태: ${this.state}`)
    }
}

class TodoManager extends Todo {
    constructor() {
        this.todolist = [];
    }

    /* 할 일 저장 */
    addItem(contents) {
        this.todolist.push(new Todo(contents));
    }

    /* 할 일 목록을 보여줌 */
    getItems() {
        return todolist
    }

    /* 할 일의 남은 갯수 반환 */
    getLeftTodoCount() {
        return this.contents
    }
}



const myTodo = new TodoManager();
console.log(myTodo);

myTodo.addItem('점심먹고 10분간 잠자기')
console.log(myTodo.getItems())   // item과 finished 상태가 나타나야 함

console.log(myTodo.getLeftTodoCount());   // 1
myTodo.getItems()[0].changeState();   // 변경시키고 싶어하는 아이템에 접근해서 변경 (실행한것이 실행이 끝났다고 판단하게 만듦)
console.log(myTodo.getLeftTodoCount());  // 0개가 됨
console.log(myTodo.getItems());   // finished가 true로 바뀜 (할 일이 끝난 것)