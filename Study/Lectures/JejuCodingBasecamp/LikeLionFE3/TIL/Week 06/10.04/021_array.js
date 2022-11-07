/* array 
값의 변경이 가능함 
대부분 동일한 자료의 형태가 반복됨 */

let 과일 = ['사과', '수박', '복숭아', '딸기', '바나나'];

// TMI
function sum(x, y) {
    return x + y
}

let test = [1, 2, 3];
let obj = { 'one': 1, 'two': 2 };
let data = [console.log, sum, test, obj];
data[0]('hello world')
console.log(data[2][1]);
