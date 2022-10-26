/* IIFE 패턴 - 선언과 동시에 실행 */
(function () {
    console.log('IIFE');
})();



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