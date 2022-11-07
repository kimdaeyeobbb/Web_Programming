let m = new Map();  // new (생성자 함수) -> this를 받는 효과
m.set('하나', 1)
    .set('둘', 2)
    .set('셋', 3)
    .set('넷', 4)
    .set(true, '트루')
    .set([1, 2], '리얼리?')
console.log(m)  // Map(6) { '하나' => 1, '둘' => 2, '셋' => 3, '넷' => 4 true => '트루', [1, 2] => '리얼리?' }


console.log(m.get('하나'))  // 1
console.log(m.get(true))  // 트루 (object에서는 가능하지 않음)
console.log(m.get([1, 2]))  // undefined (이렇게는 사용불가. 각 객체가 다른 주소값을 가지기 때문에 새로운 [1,2]를 지칭함)

/* 파이썬과의 비교분석 */