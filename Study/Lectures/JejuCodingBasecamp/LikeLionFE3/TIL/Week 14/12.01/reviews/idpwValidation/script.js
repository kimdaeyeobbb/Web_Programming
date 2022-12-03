let myInput = document.getElementById("pw");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");

/* 사용자가 패스워드 영역에서 클릭을 했을 때 메시지 박스를 보여주기 */
myInput.onfocus = function () {
    document.getElementById("message").style.display = "block";
};

/* 사용자가 패스워드 영역 내에서 무엇인가를 타이핑치기 시작했을 경우 */
myInput.onkeyup = function () {
    // 소문자 검증
    const lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    /* 대문자 검증 */
    const upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    /* 숫자 검증 */
    const numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    /* 길이 검증 */
    if (myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
};