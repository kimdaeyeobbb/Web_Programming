const numbers = [0, 1, 2, 3, 4, 5, 6];

const [one, ...rest] = numbers;

console.log(one);
console.log(rest);


/* error */
const numbers2 = [0, 1, 2, 3, 4, 5, 6];

const [..rest2, last2] = numbers2;