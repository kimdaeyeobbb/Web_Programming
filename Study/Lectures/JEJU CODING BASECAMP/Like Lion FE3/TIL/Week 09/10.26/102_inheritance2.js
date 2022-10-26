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
    Parent.call(this);
}


Child.prototype = Object.create(Parent.prototype, {
    //프로퍼티 서술자 객체
    // 내장 속성을 설정할 수도 있음
    constructor: {  // constructor를 객체로 설정할 수 있음
        configurable: true,   // 프로퍼티 변경이 가능한가를 설정하는 속성 (false로 설정시 변경불가)
        enumerable: true,   // 전달하는 객체가 열거 가능한가?
        writable: true,    // 프로퍼티의 값을 수정할 수 있는가?
        value: Child
    }
})

/* 여기를 맨 마지막에 볼 것 */
const child2 = new Child();
console.log(child2)   // 프로퍼티 서술자객체를 설정함으로써 constructor가 누구인지 분명하게 알 수 있게됨
// 프로퍼티 서술자객체가 없었던 child는 그냥 객체일 뿐이므로 constructor가 안나왔던 것임


Child.prototype.canWalk = function () {
    console.log('now i can walk')
}

const child = new Child();
console.log(child)


// 임의의 새로운 생성자 함수
function Test() { };
const test = new Test();  // 생성자 함수의 인스턴스 생성

console.log(test)  // Test{} -> 뜯어보면  prototype이 Object, constructor가 f Test()

const myObj = {};
Test.prototype = myObj;  // 할당 가능. Test.prototype은 myObj라는 빈 객체의 공간을 가리킴 -> 이때 test와의 연결이 끊김 
myObj.testFunc = function () {   // 새로운 함수
    console.log('테스트입니다!')
}

const test2 = new Test();    // __proto__의 새로운 여ㅕㄴ결

console.log(myObj);    //새로운 공간이 생긴것을 확인할 수 있음
console.log(test2.testFunc());   // myObj의 공간내에 존재

myObj.testProp = 'hi!!';
console.log(test2.testProp)   // 연결이 됨을 확인할 수 있음