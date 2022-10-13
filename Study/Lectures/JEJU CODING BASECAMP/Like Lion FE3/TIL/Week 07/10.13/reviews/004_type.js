let a = [10, 20, 30];
function hello(data) {
    data[0] = 1000;
}

hello(a);
a; // [1000,20,30]   -> 원본값이 변함
