let txt = 'abcABC';
let txt2 = 'SKY CEO danny'
let regExp = /[A-Z]/;   // 정규표현식으로 찾을 문자
console.log(txt.search(regExp));

// slice(시작인덱스, 종료인덱스): 시작인덱스부터 종료인덱스-1 를 반환

console.log(txt2.slice(0, 7));
console.log(txt2.slice(0, 8));

// substring(시작인덱스, 종료인덱스): 시작인덱스부터 종료인덱스 -1까지 반환
console.log(txt2.substring(1, 3));
console.log()


// substr(시작위치, 길이): 시작인덱스부터 길이만큼 반환

console.log(txt2.substr(8, 3));



// replace ***중요

console.log(txt2.replace('CEO', 'CTO'));


// 뒤에있는것 까지 바꾸고 싶으면 정규표현식이나 repalceAll을 사용할 것
let txt5 = "paullab CEO Dan CEO"

console.log(txt5.replace(/"CEO"/g, "CTO"));   // 따옴표도 문자로 인식
console.log('hello');
console.log(txt5.replace(/CEO/g, "CTO"));
console.log(txt5.replaceAll('CTO', 'CEO'));

console.log(txt.toUpperCase());
console.log(txt.toLowerCase());


// include - if문 분기처리 전에 해당 문자 포함여부를 처리
console.log(txt.includes("z"));
console.log(txt.includes("b"));


// split
console.log(txt2.split(' '));  // 띄워쓰기 기준으로 잘라내기
console.log("010-1234-5673".split("-"));

// trim- 공백제거 => 새롭게 만들어서 데이터 반환 (원본에 영향 X)
console.log("       abg");
console.log("       abg".trim());
console.log("   a b c   ".trim());   // 앞뒤공백제거