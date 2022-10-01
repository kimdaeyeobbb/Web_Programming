function add2(num1, num2) {
    // 타입지정하지 않으면 any타입으로 지정됨 (any는 사용자제 요망)
    console.log(num1 + num2);
}
// add(); // NaN
// add(1); // NaN
add2(10, 20); // 30
// add(1, 2, 3); // 3 ?
// add("he", "she"); // heshe
