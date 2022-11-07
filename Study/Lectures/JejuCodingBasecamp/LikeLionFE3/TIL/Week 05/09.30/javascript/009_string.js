/* 문자열 */

let txt = 'ABCDEFGHIJK';
let txt2 = "mom said 'hello world'";
let txt3 = "mom said \"hello world\"";
let txt4 = "a\nb\ncde";
let txt5 = "a\tbcde";
let txt6 = "10";

console.log(txt + txt);  // ABCDEFGHIJKABCDEFGHIJK
console.log(txt[0]);   // A
console.log(txt[4] + txt[5] + txt[6]);   // EFG

console.log(txt2);
console.log(txt3);
console.log(txt4);   // a b cde (줄바꿈)
console.log(txt5);   //  a  bcde (탭)
console.log(txt6 + txt5);
console.log(parseInt(txt6) + parseInt(txt6));   // 20
console.log(txt5[1]);
console.log(txt5[2]);   // 역슬러쉬(\)t는 하나의 문자열로 처리함

console.log(parseInt("10abc") + parseInt("10abc"));  // 20
console.log(Number("10abc") + Number("10abc"));   // NaN

console.log(1000000 * NaN);   // NaN

console.log(Number(10.1));   // 10.1
console.log(parseInt(10.1));   // 10
console.log(txt.indexOf('C'));
console.log(txt.search("F"));

console.log(txt.search("2"));
console.log(txt[-1]);


/* 정규표현식 */
let regExp = /CD/;
console.log(txt.search(regExp));
