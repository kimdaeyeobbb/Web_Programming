/* let: block 단위 scope*/
var global = '전역변수';

if (global === '전역변수'){
    let global = '지역변수';

    console.log(global);   // 지역변수
}

console.log(global);  // 전역변수

// let & const는 안전하게 코드가 작성 가능하다.

// let보다는 const를 사용하는게 좋다
// 왜냐하면 js는 변수 내부에 많은것을 담을 수 있으므로 헷갈릴 수 있다.

/* 선언 & 할당 */
const person = {
    name: 'kim',
    age: '23',
}

/* 재할당을 하려고 하므로 에러 발생 */
/*
person = {
    name: 'kim2',
    age: '23',
}
*/
// 따라서 다음과 같이 바꾸는게 좋다.

person.name = 'park'
person.age = '24'

console.log(person);   // person이라는 값이 아닌 person내 객체의 값만 바꾼 것이므로 에러 발생 X



/* 배열 */

const person2 = [{
    name: 'lee',
    age: '31',
}]
// 배열 생성

person2.push({
    name: 'jung',
    age: '32',
})
// 배열에 객체 추가

console.log(person2);

// const는 재할당만 금지된다.
// 따라서 본연의 객체 & 배열 등과 같은 레퍼런스 객체들을 조작할 때는 이상이 없다.