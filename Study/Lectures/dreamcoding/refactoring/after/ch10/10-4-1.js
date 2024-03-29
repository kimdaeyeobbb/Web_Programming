export function plumages(birds) {
    let map = birds.map((b) => [b.name, b.plumage]);
    let map1 = new Map(map);
    return map1;
}
export function speeds(birds) {
    return new Map(birds.map((b) => [b.name, b.airSpeedVelocity]));
}

// 새를 나타내는 부모 클래스
class Bird {
    #name; // private field
    constructor(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    get plumage() {   // 깃털상태
        return 'unknown';
    }

    get airSpeedVelocity() {
        return null;
    }
}


// 세부적인 새 클래스
class EuropeanSwallow extends Bird {
    constructor() {
        super('EuropeanSwallow') // 새의 이름을 알려줌
    }

    get plumage() {
        return "average";
    }

    get airSpeedVelocity() {
        return 35;
    }
}

class AfricanSwallow extends Bird {
    constructor() {
        super("AfricanSwallow")
    }

    get plumage() {
        return this.numberOfCoconuts > 2 ? 'tired' : 'average'
    }

    get airSpeedVelocity() {
        return 40 - 2 * this.numberOfCoconuts;
    }
}

class NorwegianBlueParrot extends Bird {
    constructor() {
        super("AfricanSwallow")
    }

    get plumage() {
        return this.voltage > 100 ? 'scorched' : ''
    }

    get airSpeedVelocity() {
        return 40 - 2 * this.numberOfCoconuts;
    }
}

const result = plumages([new NorwegianBlueParrot(), new AfricanSwallow()])

console.log('result: ', result)

export function plumage(bird) {
    switch (bird.type) {
        case 'EuropeanSwallow':
            return 'average';
        case 'AfricanSwallow':
            return bird.numberOfCoconuts > 2 ? 'tired' : 'average';
        case 'NorwegianBlueParrot':
            return bird.voltage > 100 ? 'scorched' : 'beautiful';
        default:
            return 'unknown';
    }
}

export function airSpeedVelocity(bird) {
    switch (bird.type) {
        case 'EuropeanSwallow':
            return 35;
        case 'AfricanSwallow':
            return 40 - 2 * bird.numberOfCoconuts;
        case 'NorwegianBlueParrot':
            return bird.isNailed ? 0 : 10 + bird.voltage / 10;
        default:
            return null;
    }
}
