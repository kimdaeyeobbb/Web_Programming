/* Array.메서드 VS Array.prototype.메서드 */

let arr1 = [1, 2, 3, 4, 5];


/* Array.메서드 */
console.log(Array.isArray(arr1));  // true
// console.log(arr1.isArray)  // undefined
// console.log(arr1.isArray())   // error


/* Array.prototype.메서드 */
console.log(arr1.length);  // 5
// console.log(arr1.length());  // error
// console.log(Array.length(arr1)); // error