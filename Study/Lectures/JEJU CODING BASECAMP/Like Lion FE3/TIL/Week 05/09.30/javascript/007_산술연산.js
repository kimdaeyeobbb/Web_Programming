let one = 10;
let two = 3;
console.log(one + two);
console.log(one - two);
console.log(one / two);
console.log(one * two);
console.log(one ** two);
console.log(one % two);
console.log(one, one, two.tow);


// 구구단 출력하기 (권장 X)
console.log(one, 'X', two, '=', one * two);
console.log(one + ' X ' + two + '= ' + one * two);
console.log(`${one} X ${two} = ${one * two}`);


// 템플릿 리터럴 내의 연산은 밖으로 빼주는 것을 권장함
let three = one * two;
console.log(`${one} X ${two} = ${three}`);
