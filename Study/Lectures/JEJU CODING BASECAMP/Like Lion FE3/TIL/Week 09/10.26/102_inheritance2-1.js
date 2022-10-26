function Parent() {
    this.name = 'danny'
}

Parent.prototype.rename = function (name) {
    this.name = name;
}

Parent.prototype.sayName = function () {
    console.log(this.name);
}

function Child() {
    Parent.call(this);  // 
}

/* Child의 prototype을 Parent의 prototype으로 연결시켜주고 있음 
-> 앞으로 생성되는 Child의 인스턴스들은 모두 Parent의 prototype을 참조하게 됨 
-> parent의 메서드들을 상속받아서 이용할 수 있게 됨 */
Child.prototype = Object.create(Parent.prototype, {

    /* 프로퍼티 서술자 객체 
    -> Parent.prototype외에 추가로 던져주는 인자
    -> 객체를 던지니까 내부의 프로퍼티를 같이 설정할 수 있음
    -> 내장 속성을 설정할 수도 있음 */
    constructor: {  // constructor를 객체로 표현해서 전달할 수 있음
        /* 자바스크립트가 내부적으로 사용하는 프로퍼티를 설정해보자 */
        configurable: true,   // 프로퍼티 변경이 가능한가를 설정하는 속성 (false로 설정시 프로퍼티 값 변경불가)
        enumerable: true,   // 전달하는 객체가 열거 가능한가? 를 결정할 수 있음
        writable: true,    // 프로퍼티의 값을 수정할 수 있는가? 를 결정할 수 있음
        value: Child  // 전달해주는 인스턴스의 생성자를 Child라고 직접적으로 명시해줌
    }
})


Child.prototype.canWalk = function () {
    console.log('now i can walk')
}


const child2 = new Child();
console.log(child2)   // 프로퍼티 서술자객체를 설정함으로써 constructor가 누구인지 분명하게 알 수 있게됨
// 프로퍼티 서술자객체가 없었던 child는 그냥 객체일 뿐이므로 constructor가 안나왔던 것임