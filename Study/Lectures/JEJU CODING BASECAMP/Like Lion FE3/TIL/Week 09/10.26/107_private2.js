/* 클래스 이전의 문법 사용 */
/* 과거 방식- 클로저를 이용한 비공개 프로퍼티 설정 */
function Person() {
    let age = 30;   // 비공개 프로퍼티로 만듦 -> 비공개 프로퍼티를 담을 클로저 공간이 됨

    function innerPerson() { }

    innerPerson.prototype.getAge = function () {
        // 우리가 만든 innerPerson 함수의 prototype에 접근해서 getAge함수를 prototype 공간에 저장함

        return age;
    }

    return innerPerson;
    // innerPerson 반환시 Person 함수가 메모리에서 해제되면서 age에 접근하는 방법이 사라짐 (Person 함수의 공간이 사라지므로)
    // 따라서 age가 비공개 프로퍼티를 담을 클로저 공간이 됨
}

const PersonFunc = Person();   // Person의 반환값인 innerPerson이 저장됨
const person = new PersonFunc();   // 생성자 함수의 실행결과인 innerPerson을 담은 person 인스턴스가 만들어짐 (Person이라는 공간은 사라짐)

console.log(person)   // innerPerson {}
console.log(person.getAge())  // 30
console.log(person.age)   // 비공개 프로퍼티가 되어 더이상 사용 불가

