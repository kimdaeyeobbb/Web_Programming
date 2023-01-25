class Person {
    #name;
    #manager;
    #chargeCode;
    constructor(name, manager, chargeCode) {
        this.#name = name;
        this.#manager = manager;
        this.#chargeCode = chargeCode;
    }

    get name() {
        return this.#name;
    }

    get manager() {
        this.#manager;
    }

    get chargeCode() {
        return this.#chargeCode;
    }

}


const person = new Person('Tom', 'aManager', '999');
console.log(person.name);
console.log(person.department.manager);
console.log(person.department.chargeCode);
