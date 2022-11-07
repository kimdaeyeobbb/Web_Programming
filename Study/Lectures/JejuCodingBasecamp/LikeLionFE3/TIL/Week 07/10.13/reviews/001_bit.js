console.log(9 | 3); // 1001 | 0011 -> 1011 -> 11
console.log(37 | 3); // 32+4+1 = 0010 0101 | 0000 0011 -> 0010 0111 -> 32 + 4+2+1 = 39

/* 단락 회로 평가 - 앞의 값이 NULL인지 확인하고 싶은 경우 */
console.log(10 || 100);  // 10
console.log(null || 100);   // 100

console.log(0 && 100);  // 0
console.log(null && 100);  // null
console.log(100 && 12)  // 12
console.log(true && 'a') // a

