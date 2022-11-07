/* 비효율적 코드 */
let book = {
    책이름: '타스넌내타입',
    책가격: 10000,
    저자: 'Danny',
    출판일: '22.10.11'
}

let newBook = {}

newbook['책이름'] = 'javascript' // 예를 들어 form에서 입력 받은 값
newbook['책가격'] = 1000000
newbook['저자'] = '세원, 석규, 슬기'
newbook['책가격'] = '22.10.30'


// 위의 코드를 효율적으로 작성하는 것이 '생성자 함수'
/* 효율적 코드 (생성자 함수) */
function Book2(책이름, 책가격, 저자, 출판일) {
    // this = {}   // new 키워드 사용시 내부적으로 얘가 있는것처럼 작동
    this.책이름 = 책이름   // this는 function이라는 자신을 가리키고 있음
    this.책가격 = 책가격
    this.저자 = 저자
    this.출판일 = 출판일
    //return this    // new 키워드 사용시 내부적으로 얘가 있는것처럼 작동
}

let data = Book2('HTML', 10, '유진', '22.12.30')
console.log(data)  // 함수 내에 retunr이 없으면 undefined

let data2 = new Book2("CSS", 20, "유진", "23.12.30");   // new 키워드를 붙이면 undefined아님
console.log(data2)  // Book2 {책이름: 'CSS', 책가격: 10, 저자: '유진', 출판일: '22.12.30'}

let data3 = new Book2('js', 30, '유진', '24.12.30')

console.log(data, data2, data3)  // Book2 {책이름: 'CSS', 책가격: 20, 저자: '유진', 출판일: '23.12.30'} Book2 {책이름: 'js', 책가격: 30, 저자: '유진', 출판일: '24.12.30'}