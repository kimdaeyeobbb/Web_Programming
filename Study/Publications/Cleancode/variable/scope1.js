/* var: 함수 단위 scope*/
var global = '전역변수';

if (global === '전역변수'){
    var global = '지역변수';

    console.log(global);   // 지역변수
}

console.log(global);  
// 전역변수가 아니다! 지역변수이다!
// 따라서 global이 let이 아니라면 계속 변수가 오염되어 사용자의 의도와는 다르게 지역변수로 쓰인다