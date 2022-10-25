function Parent() {
    this.name = '재현';
}
Parent.prototype.rename = function (name) {
    this.name = name;
}
Parent.prototype.sayName = function () {
    console.log(this.name);
}

function Child() {
    Parent.call(this);  // call -> 함수의 메서드(this의 대상 바꿈).
    // this는 인스턴스를 지칭하므로 Parent함수에 대한 인스턴스와 연결함 
}

Child.prototype = Object.create(Parent.prototype);   // Parent.prototype을 인자로 받음
Child.prototype.canWalk = function () {
    console.log('now i can walk!!');
}


const child = new Child();   // child인스턴스는 Child 생성자함수를 바라보게 함
console.log(child.name);   // 부모의 프로퍼티를 가져와서 사용할 수 있게 됨


child.rename('소울');
console.log(child.sayName())   // 소울