/* 순수 자바스크립트 안에 있는 템플릿 리터럴 문법 */
const name = '이호준'
const age = 10

function 인사(문구, 이름, 나이, a, b, c) {
    console.log(문구)
    console.log(이름)
    console.log(나이)
    console.log(a, b, c)
    return `${문구[0]}${이름}${문구[1]}${나이 + 나이}${문구[2]}`
}

// ${} 기준으로 잘라서 넣어줌
const 인사문구 = 인사`이름은 ${name}이고 나이는 ${age + age}입니다. ${10} ${20} ${30}`

console.log(인사문구)