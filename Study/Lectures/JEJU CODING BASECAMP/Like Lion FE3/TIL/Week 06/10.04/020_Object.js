function sum(x, y) {
    return x + y;
}

console.log(sum(10, 20));
console.log(sum);   // 코드 전체 출력 (function의 기능 전체 출력)
console.log(typeof sum);   // function
console.dir(sum);

// 변수 추가
sum.value = 'danny';
console.log(sum);
console.dir(sum); // value: "danny"가 추가되었음을 확인할 수 있음
// js객체의 모든 속성을 보여줌


console.log('\n')

let newuser = {
    id: 'puppy',
    pw: '1234',
    // md5 해시생성시 (지금은 사용 X)
    // FF0EB2864FEB22354747F8C85D42CCB5 라는 해시값 생성 
    // 적은 항상 내부에 있다. 비밀번호는 나도 모르게 만들 것
    name: 'danny',
    email: 'kimdyk2@kakao.com',
    active: 'true'  // 활성화 상태 (비활성화될 경우, 휴면계정으로 전환)
}

console.log(newuser['id']);   // key로 value 찾기 
console.log(newuser.id);   // 


let user = [{
    id: 'lion',
    pw: '1234',
    // md5 해시생성시 (지금은 사용 X)
    // FF0EB2864FEB22354747F8C85D42CCB5 라는 해시값 생성 
    // 적은 항상 내부에 있다. 비밀번호는 나도 모르게 만들 것
    name: 'danny',
    email: 'kimdyk2@kakao.com',
    active: 'true'  // 활성화 상태 (비활성화될 경우, 휴면계정으로 전환)
}, {
    id: 'puppycat',
    pw: '1234',
    // md5 해시생성시 (지금은 사용 X)
    // FF0EB2864FEB22354747F8C85D42CCB5 라는 해시값 생성 
    // 적은 항상 내부에 있다. 비밀번호는 나도 모르게 만들 것
    name: 'danny',
    email: 'kimdyk2@kakao.com',
    active: 'true'  // 활성화 상태 (비활성화될 경우, 휴면계정으로 전환)
}]