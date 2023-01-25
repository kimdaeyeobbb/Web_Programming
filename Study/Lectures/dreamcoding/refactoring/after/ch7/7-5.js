class Person {
    #name;
    #telephoneNumber;
    constructor(name, areaCode, number) {
        this.#name = name;
        this.#telephoneNumber = new TelephoneNumber(areaCode, number)
    }

    get name() {
        return this.#name;
    }

    set name(arg) {
        this.#name = arg;
    }

    get telephoneNumber() {
        return `(${this.officeAreaCode}) ${this.officeNumber}`;
    }

    get officeAreaCode() {
        return this.#officeAreaCode;
    }

    set officeAreaCode(arg) {
        this.#officeAreaCode = arg;
    }

    get officeNumber() {
        return this.#officeNumber;
    }

    set officeNumber(arg) {
        this.#officeNumber = arg;
    }

    get tostring() {
        return `(${this.#areaCode}) ${this.#number}`;
    }
}

const telephoneNumber = new TelephoneNumber('010', '12345678')
telephoneNumber.toString


const person = new Person('엘리', '010', '12345678');
console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
console.log(person.telephoneNumber);
