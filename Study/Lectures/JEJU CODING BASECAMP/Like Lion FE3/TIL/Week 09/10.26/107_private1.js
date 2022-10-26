class Robot {
    #password   //  클래스 내 비공개 프로퍼티 선언

    constructor(name, pw) {
        this.name = name;
        this.#password = pw;   // 비공개 프로퍼티에 인자 할당
    }


    sayYourName() {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }

    getPassword() {
        return this.#password   // 인스턴스의 패스워드
    }

    setPassword(pw) {     // 값을 수정
        this.#password = pw;
    }
}

const robot = new Robot('DANNY', '1234');
console.log(robot.name);   // 'DANNY'
// console.log(robot.#passowrd)   // error

robot.getPassword();   // '1234'
robot.setPassword('hello');
robot.getPassword();  // 'hello'