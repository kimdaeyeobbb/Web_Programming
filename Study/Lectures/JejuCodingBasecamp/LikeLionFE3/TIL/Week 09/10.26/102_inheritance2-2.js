// 임의의 새로운 생성자 함수
function Test() { };
const test = new Test();  // 생성자 함수의 인스턴스 생성

console.log(test)  // Test{} -> 뜯어보면  prototype이 Object, constructor가 f Test()

const myObj = {};
Test.prototype = myObj;  // 할당 가능. Test.prototype은 myObj라는 빈 객체의 공간을 가리킴 -> 이때 test와의 연결이 끊김 
myObj.testFunc = function () {   // 새로운 함수
    console.log('테스트입니다!')
}

const test2 = new Test();    // __proto__의 새로운 연결

console.log(test.__proto__)  // constructor: ƒ Test()
console.log(test2.__proto__)   // testFunc: ƒ()


console.log(myObj);    // testFunc: ƒ() -> 새로운 공간이 생긴것을 확인할 수 있음
console.log(test2.testFunc());   // 테스트입니다! -> myObj의 공간내에 존재

myObj.testProp = 'hi!!';
console.log(test2.testProp)   // hi!! -> 연결이 됨을 확인할 수 있음