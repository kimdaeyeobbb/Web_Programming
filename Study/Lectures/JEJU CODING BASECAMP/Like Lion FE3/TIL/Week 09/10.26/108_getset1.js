class Robot {
    #password

    constructor(name, pw) {
        this.name = name;
        this.#password = pw;
    }


    sayYourName() {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }

    /* get, set 키워드를 사용해서 객체의 프로퍼티에 접근하듯 값을 다룰 수 있게 됨 */
    // 메서드명도 동일해짐
    get password() {
        return this.#password
    }

    set password(pw) {
        this.#password = pw;
    }
}

const bot = new Robot('재현', 1234);   // 인스턴스 생성

bot.password = 5678;
console.log(bot.password); 