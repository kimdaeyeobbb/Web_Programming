class Sausage {
    constructor(ingredient1, ingredient2) {
        this.ingredient1 = ingredient1;
        this.ingredient2 = ingredient2;
    }
    taste() {
        console.log(`소시지에서 ${this.ingredient1} 맛과 ${this.ingredient2}맛이 납니다`)
    }
}

class FireSausage extends Sausage {
    constructor(ingredient1, ingredient2) {
        super(ingredient1, ingredient2)
    }

    tasteLikeFire() {
        this.taste();
        console.log("불맛 소시지에서 불맛이 납니다!!!!!!")
    }
}


let fire = new FireSausage('소고기', '파');
console.log(fire.tasteLikeFire())