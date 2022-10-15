function add(num1, num2) {
    console.log(num1 + num2);
}


add();   // NaN
add(1);   // NaN
add(10, 20);   // 30
add(1, 2, 3);   // 3 ?
add('he', 'she');   // heshe