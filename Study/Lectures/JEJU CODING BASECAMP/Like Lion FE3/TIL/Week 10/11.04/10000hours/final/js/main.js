// 버튼을 document.queryselecotr를 사용해서 계속 붙이면 성능이슈가 있음
// 버튼 개수가 적을 떄에는 그렇게 해도 괜찮음

/* 섹션 */
const loadingSection = document.querySelector(".cont-result-loading")
const resultSection = document.querySelector(".cont-result")
const modalSection = document.querySelector("#modal")

/* 버튼 */
const startButton = document.querySelector('.btn-exc')
const openButton = document.querySelector('.btn-go')  // 모달오픈
const closeButton = document.querySelector('.btn-close')
const shareButton = document.querySelector('.btn-share')   // 공유하기 버튼


/* 함수 */
function calculate() {
    /* doc -> document 자동완성, qs -> querySelector 자동완성 */

    // console.log('1')
    const fieldValue = document.querySelector("#inp-field")
    const timeValue = document.querySelector("#inp-time")
    // const timeValue = parseInt(document.querySelector("#inp-time"))   // string에서 정수형으로 바꿈
    // console.log(fieldValue.value, timeValue.value)
    // console.log(typeof (timeValue))   // object
    // console.log(typeof (timeValue.value))   // string

    if (fieldValue.value === "") {   // 값이 비어있는 경우 (required 이후 2번째로 비정상 접근 체킹하는 것)
        alert("비정상 접근입니다.")
        return
    } else if (timeValue.value === "") {
        alert("비정상 접근입니다.")
        return
    } else if (timeValue.value >= 24) {
        alert("하루는 24시간입니다.")
        return
    } else if (timeValue.value >= 12) {
        alert("우리의 육체는 로봇이 아닙니다.")
        return
    }

    // .cont-result-loading가 먼저 보이고 result가 보여야 함
    loadingSection.style.display = "block";

    // 보이게 한 걸 약 2초뒤에 사라지고 결과창이 나오게 만들어야 함

    setTimeout(function () {
        const fieldResult = document.querySelector(".field-result")
        const timeResult = document.querySelector(".time-result")

        loadingSection.style.display = "none";
        resultSection.style.display = "block";

        fieldResult.innerText = fieldValue.value
        timeResult.innerText = 10000 / parseInt(timeValue.value)
    }, 2000)
}

function openModal() {
    // console.log('2')
    modalSection.style.display = "block"
}

function closeModal() {
    // console.log('3')
    modalSection.style.display = "none"
}


function copyUrl() {
    // console.log('4')

    /* 구현 방법 - 3가지 방법이 존재 */
    // 1번째: 구버전 (이제는 잘 사용하지 않음). 어떤 브라우저에서든 오류없이 잘 실행됨.
    // 2번째: 신버전. 사파리 13.1버전의 https환경에서만 작동하는 코드
    // 3번째: clipboard.js 라이브러리 사용하는 방법

    // /* 1번째 방법 */
    // let url = window.location.href
    // console.log(url)

    // // 복사하기
    // let temp = document.createElement('input')
    // temp.value = url
    // document.body.appendChild(temp)
    // temp.select()  // select된 상태에서 아래에 document.execCommand("copy")
    // document.execCommand("copy")
    // document.body.removeChild(temp)
    // alert("URL이 복사되었습니다.")


    /* 2번째 방법 */
    // Navigator 인터페이스는 사용자 에이전트 상태와 신원정보를 나타내며, 
    let url = window.location.href;
    navigator.clipboard.writeText(url)   // 클립보드에 복사하는 것
        .then(() => {
            alert('URL이 복사되었습니다.')
        })
        .catch(err => {
            alert('URL이 복사되지 않았습니다. 호환되는 브라우저가 아닙니다.')
            console.log(err)
        })
}

startButton.addEventListener("click", calculate)
openButton.addEventListener("click", openModal)
closeButton.addEventListener("click", closeModal)
shareButton.addEventListener("click", copyUrl)


window.onclick = function (event) {
    if (event.target === modalSection) {
        closeModal();    // 모달 외의 영역 중 아무데나 클릭해도 모달 섹션을 클릭한 효과를 내면서 모달창이 닫히게 만듦
    }
}