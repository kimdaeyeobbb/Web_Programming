/* 객체 */
const player = {
    name: "KIM", // name : property(변수 역할)
    age: 20,
};

player.name = "PARK";  // name 변경
console.log(player);   // js는 위에서부터 아래로 읽어들임

player.charm = "sexy";   // property 추가
console.log(player);





/* 함수 */
function plus(num1, num2){
    console.log(num1+num2);
}

plus; // 작동하지 않음
plus(2,4);   // 소괄호 ()를 씌워줘야 작동



function minus(num){   // 매개변수는 함수의 body에서만 사용가능 (지역변수)
    console.log(num-10);
}

minus(10,20,30,40,50,60);   
// 이 함수는 첫번째 인자만 받으므로 나머지 값들은 적용X


/* 함수 - 계산기 제작 */
const calculator = {
    add: function (num1,num2) {
        console.log(num1+num2);
    },
    
    minus: function (num1,num2){
        console.log(num1-num2);
    },
    multiplication: function(num1,num2){
        console.log(num1*num2);
    },
    division: function(num1, num2){
        console.log(num1/num2);
    },
    involution: function(num1,num2){
        console.log(num1**num2);
    }
};

calculator.add(2,2);
calculator.minus(2,2);
calculator.multiplication(2,2);
calculator.division(2,2);
calculator.involution(2,2);