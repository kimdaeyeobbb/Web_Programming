const mainForm = document.querySelector("#mainForm");
const progressBar = mainForm.querySelector('.bar-progress');  // mainForm의 자식요소들 중 progressBar를 선택
const message = mainForm.querySelector('.msg-notice');
const inputs = mainForm.querySelectorAll('input');
const btnReset = mainForm.querySelector('button[type="reset"]'); // 속성 선택자를 사용. 속성 선택자는 대괄호로 감싸줌. reset이라는 속성을 가진 type 선택


mainForm.addEventListener('keyup', () => {
    // let validCounter = 0;// 유효한 input의 개수 저장

    // inputs.forEach((item) => {
    //     if (item.validity.valid) { // validity: 요소 내의 값이 유효한지 아닌지를 알려주는 여러가지 정보를 포함
    //         validCounter++;
    //     }
    //})

    /* filter를 사용할 경우 forEach와 counting 변수가 불필요함*/
    const result = Array.prototype.filter.call(inputs, (item) => {
        return item.validity.valid
    });   // result에는 통과된 요소만 모아서 가지고 있음

    /* 아래의 코드를 이용해도 됨 */
    // const result = [...inputs].filter((item) => {
    //     return item.validity.valid
    // })

    /* 아래의 코드를 이용해도 됨 */
    // const result = Array.from(inputs).filter((item) => {
    //     return item.validity.valid
    // })

    console.log(result);


    switch (result.length) {
        case 1:
            message.textContent = "좋습니다! 계속 진행하세요!";
            progressBar.setAttribute('value', 20);
            break;

        case 2:
            message.textContent = "좋은 답변이군요! 계속 진행하세요!";
            progressBar.setAttribute('value', 40);
            break;

        case 3:
            message.textContent = "절반 이상 지났습니다! 계속 진행하세요!";
            progressBar.setAttribute('value', 60);
            break;

        case 4:
            message.textContent = "거의 완료되었습니다! 계속 진행하세요!";
            progressBar.setAttribute('value', 80);
            break;

        case 5:
            message.textContent = "이제 제출해주세요!";
            progressBar.setAttribute('value', 100);
            break;

        default:
            message.textContent = "설문지를 작성해주세요!";
            progressBar.setAttribute('value', 0);

    }
})

btnReset.addEventListener('click', () => {
    message.textContent = "설문지를 작성해주세요!";
    progressBar.setAttribute('value', 0);
})