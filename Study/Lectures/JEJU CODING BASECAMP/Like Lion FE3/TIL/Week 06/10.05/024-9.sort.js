const vegetable = ['beet', 'carrot', 'apple'];
vegetable.sort();   // 알파벳 순 정렬
console.log(vegetable);  // [ 'apple', 'beet', 'carrot' ]



const numbers = [400, 200, 100];
numbers.sort();
console.log(numbers) // [ 100, 200, 400 ]


const numbers2 = [40, 200, 10000];
numbers2.sort();
console.log(numbers2);  // [ 10000, 200, 40 ]


const numbers3 = [400, 20000, 1];
numbers3.sort();
console.log(numbers3);  //[ 1, 20000, 400 ]


const arrNum = [13, 9, 10, 2];
//console.log(arrNum.sort());  / / [10, 13, 2, 9]

/* compare function */
let result = arrNum.sort(function (a, b) {
    console.log("a: ", a, ", b: ", b, ", a-b:", a - b);
    return a - b;
})
console.log(result);  // [ 2, 9, 10, 13 ]
