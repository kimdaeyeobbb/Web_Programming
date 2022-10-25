class Robot {
    constructor(name) {
        this.name = name;
    }

    sayYourName() {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님`)
    }
}

let robot3 = new Robot('danny')
robot3.sayYourName();

let robot4 = new Robot('racheal')
robot4.sayYourName();



class Person {
    constructor(name) {
        this.name = name;

    }
    canWalk() {
        console.log(`${this.name} can walk`)
    }
}


let person = new Person('danny');
person.canWalk()