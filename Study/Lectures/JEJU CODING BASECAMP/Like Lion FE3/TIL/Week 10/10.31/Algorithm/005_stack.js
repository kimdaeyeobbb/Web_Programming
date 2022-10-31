class Stack {
    constructor() {
        this.arr = []; // 연결리스트로 구현할수도있지만, 지금 배우지 않았으므로 배열로 구현
        this.length = 0;
    }

    push(data) {
        this.arr.push(data);
        this.length += 1;
    }

    pop(index) {
        if (this.length == 0) {
            return "배열의 길이가 0입니다!";
        }

        if (index > this.arr.length - 1) {
            this.length -= 1;
            return this.arr.pop();
        }

        let result = this.arr.splice(index, 1);
        this.length -= 1;
        return result;
    }

    empty() { }

    top() { }

    bottom() { }

    display() {
        return this.arr;
    }
}

let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.push(40);
s.push(50);
console.log(s.display())