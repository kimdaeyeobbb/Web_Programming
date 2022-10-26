class MakingSausage {
    constructor(stuff1, stuff2) {
        this.stuff1 = stuff1;
        this.stuff2 = stuff2;
    }

    taste() {
        console.log(`${this.stuff1}와 ${this.stuff2} 맛이 난다!`);
    }
}

class FiresSausage extends MakingSausage {
    constructor(stuff1, stuff2, fire) {
        super(stuff1, stuff2);
        this.fire = fire;
    }

    taste() {
        console.log(`${this.stuff1}와 ${this.stuff2} 맛이 난다! 심지어 ${this.fire}맛까지..`);
    }
}
const sausage = new FiresSausage('소고기', '파', '불');