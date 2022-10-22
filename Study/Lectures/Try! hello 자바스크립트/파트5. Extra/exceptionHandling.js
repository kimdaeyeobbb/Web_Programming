/* 정상적으로 동작할 때 실행되었으면 하는 것들을 기재 */
try {
    console.log("try - 1")

    /* 더이상의 에러를 발생시키지 않고 에러를 핸들리 하고 싶을 경우 throw 사용
    throw블록은 return 명령어와 비슷하게 catch 블록에 전달할 값을 하나 받음 
    => 에러를 나타내는 숫자/문자등을 기재할 수 있음 */
    throw "throw error";
    console.log("try - 2")  // 출력되지 않음
}

/* try 구문 내에서 에러가 발생하였을 떄, catch 구문에서 실행될 코드를 작성 */
catch (e) {   // throw 뒤에 기재된 문자열이 e로써 블록안에서 활용됨
    console.log("catch error: ", e)
}

/* try 구문이 정상적으로 실행되거나 
try 구문이 실행되다가 에러가 발생해서 catch 블록이 실행되고 났을 떄등
마지막으로 실행될 코드를 기재 */

// catch 구문이 모두 실행되고 나서 finally구문이 실행됨
finally {
    console.log("finally - this code will always be executed")
}