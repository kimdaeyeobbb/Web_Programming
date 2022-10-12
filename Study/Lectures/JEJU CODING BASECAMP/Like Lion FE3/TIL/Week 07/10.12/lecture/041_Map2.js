// Map에 값이 있는지 없는지 확인하기

let m = new Map();  // new (생성자 함수) -> this를 받는 효과
m.set('하나', 1)
    .set('둘', 2)
    .set('셋', 3)
    .set('넷', 4)
    .set(true, '트루')
    .set([1, 2], '리얼리?')

/* map에 해당 key값이 있는지 확인하기 */
m.has('하나')
console.log(m.has('하나'))  // true
console.log(m.has('열'))   // false

/* map에서 값을 제거하기 */
m.delete('하나')
m.has('하나')

/* 크기 구하기 */
console.log(m.size)  // 5 (Object에는 length가 없음)