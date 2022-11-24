function outer() {
    let privateVal = ['test']
    // 클로저 공간에 존재하게 됨
    // 얘는 사라지지 않음
    // 가비지 컬렉션의 대상이 되지 않음

    function getPrivate() {  // 얘는 사라짐
        return privateVal
    }

    return getPrivate
}

const getPrivateData = outer()  // outer 함수 실행시키면 getPrivate이라는 함수가 g~
const secretVal = getPrivateData();
console.log(secretVal);  // 값을 사용했다면(변수의 참조가 끊어졌다면)

secretVal = null; // 가비지 컬렉터는 값을 반드시 비워줘야 함 (null이나 undefined 사용)