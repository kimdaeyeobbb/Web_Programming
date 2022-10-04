/* true:1, flase:0, and(&&):곱, or(||):합, not(!):부정 */
// and, or는 단락평가에도 사용함


console.log(true || false);  // true 
console.log(true && false);   // false
console.log(true || true);   // true
console.log(!false);   // true
console.log(!!false);  // false
console.log(!!"");   // false
console.log(!![]);   // true






console.log('-------------------');
console.log('false' == false);   // false
console.log([] && 'hi');
