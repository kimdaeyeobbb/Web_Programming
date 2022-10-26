class Todo {
    constructor(item, finished) {
        this.item = item
        this.finished = finished
    }

    /* 상태 변경 */
    changeState() {
        this.finished = !(this.finished);
    }
}

class ToDoManager {
    constructor() {
        this.todoList = [];
    }

    addItem(item, finished = false) {
        const todo = new Todo(item, finished);
        this.todoList.push(todo);
    }

    getItems() {
        return this.todoList;
    }

    getLeftTodoCount() {
        // 아직 안한 일(해야 할 일)들의 숫자만 반환

        /* 방법1 - filter 사용 */
        // return this.todoList.filter(item => {
        //     item.finished === false
        // }).length    // 배열의 length 프로퍼티에 접근

        /* 방법2 - reduce 사용 */
        return this.todoList.reduce((total, current) => {
            // current: 순환하는 배열의 원소
            if (current.finished === false) {
                return ++total;   // total의 값을 1증가
            } else {   // true인 경우
                return total;   // 원래의 total 반환
            }
        }, 0);  // 누산기(total)의 초기값 = 0 
    }
}

const manager = new TodoManager();   // 인스턴스 생성
console.log(manager);   // TodoManager {todolist: Array(0)}

manager.addItem('노래부르기!');
console.log(manager.getItems());    // [ToDo]

manager.getItems()[0].finished = true;
console.log(manager.getLeftTodoCount());   // 