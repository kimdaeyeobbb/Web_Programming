let x = 100;
function xplus() {
    x = x + 10;   // 밖의 100을 잡아서 여기에서 +10을 해줌
}
xplus();
console.log(x);


// 함수가 끝나면 메모리주소에서 잡은것을 모두 풀기 때문에 사라짐
function yplus() {
    let y = 100
    y = y + 10
}
yplus()
console.log(y)