class Robot {
    constructor(name) {
        this.name = name;
    }

    sayYourName() {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }
}

const robot = new Robot('danny');
robot.sayYourName()   // 삐리비리. 제 이름은 danny입니다. 주인님.