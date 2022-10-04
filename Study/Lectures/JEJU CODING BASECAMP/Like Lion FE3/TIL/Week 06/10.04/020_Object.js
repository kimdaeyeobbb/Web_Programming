function sum(x, y) {
    return x + y;
}

console.log(sum(10, 20));
console.log(sum);   // 코드 전체 출력 (function의 기능 전체 출력)
console.log(typeof sum);   // function


// 변수 추가ㅏ
sum.value = 'danny';
console.log(sum);
console.dir(sum);


let newuser = {
    id: 'danny',
    pw: '1234',
    // md5 해시생성시 (지금은 사용 X)
    // FF0EB2864FEB22354747F8C85D42CCB5 라는 해시값 생성 
    // 적은 항상 내부에 있다. 비밀번호는 나도 모르게 만들 것
    name: 'c',
    email: 'd',
    active: 't' // 활성화 상태
}