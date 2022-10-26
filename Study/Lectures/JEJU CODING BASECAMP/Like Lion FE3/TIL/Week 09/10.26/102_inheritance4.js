class Sausage {
    // 프로퍼티 설정
    constructor(el1, el2) {
        // 인스턴스 만들때 자동으로 실행되는 함수 - constructor
        this.inside1 = el1;
        this.inside2 = el2;
    }

    taste() {
        console.log(`${this.inside1}맛과 ${this.inside2}맛이 난다!`)
    }
}

const sausage = new Sausage('닭고기', '양파')
console.log(sausage.taste())   // 닭고기맛과 양파맛이 난다


class FireSausage extends Sausage {
    constructor(el1, el2, el3) {
        super(el1, el2); // 부모의 el1과 el2를 전달해서 실행한 것과 동일한 효과
        this.inside3 = el3;
    }

    /* 메서드 오버라이드 */
    taste() {
        console.log(`${this.inside1}맛과 ${this.inside2}맛, ${this.inside3}맛이 납니다!`)
    }
}

const firesausage = new FireSausage('돼지고기', '파', '불')
console.log(firesausage.taste())   // 돼지고기맛과 파맛, 불맛이 납니다!