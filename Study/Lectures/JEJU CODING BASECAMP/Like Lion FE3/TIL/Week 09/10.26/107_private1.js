

/* 클래스 이전의 문법 사용 */
/* 과거 방식- 클로저를 이용한 비공개 프로퍼티 설정 */
function Person() {
    let age = 30;   // 비공개 프로퍼티로 만듦

    function innerPerson() { }

    innerPerson.prototype.getAge = function () {
        return age;
    }

    return innerPerson;
    // 이떄 메모리에서 해제되면서 age에 접근하는 방법이 사라짐
    // 따라서 age가 비공개 프로퍼티를 담을 클로저 공간이 됨
}

const PersonFunc = Person();   // PersonFunc에 반환값인 innerPerson이 저장됨
const person = new PersonFunc();   // 생성자 함수의 실행결과를 담은 person 인스턴스가 만들어짐

console.log(person)   // innerPerson {}
console.log(person.getAge())  // 30
console.log(person.age)   // 비공개 프로퍼티가 되어 더이상 사용 불가


// /* IIFE 패턴 - 선언과 동시에 실행 */
// (function () {
//     console.log('IIFE');
// })();



/* 클래스 이전의 문법을 사용 */
const NewPerson = {
    /* IIFE 패턴 - 즉시 실행함수 사용 */
    function() {
        let age = 30;

        function innerPerson() { }

        innerPerson.prototype.getAge = function () {
            return age;
        }

        return innerPerson;
        // 얘를 밖으로 빼서 NewPerson이라는 상수에 값을 집어넣음.
        // const PersonFunc = Person();  이 과정이 생략됨
    }
}();

const personWithSecret = new NewPerson();

console.log(personWithSecret.getAge());
console.log(personWithSecret.getAge);