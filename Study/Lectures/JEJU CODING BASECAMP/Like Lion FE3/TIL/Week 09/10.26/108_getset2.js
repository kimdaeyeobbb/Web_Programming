class AccountInfo {
    #password

    constructor(bank, pw, fName, Lname) {
        this.bank = bank;
        this.#password = pw;
        this.firstName = fName;
        this.lastName = Lname;
    }

    get password() {
        return this.#password
    }

    set password(pw) {
        return this.#password = pw;
    }

    get fullName() {
        return `제 이름은 ${this.lastName} ${this.firstName}입니다.`
    }

    set fullName(name) {
        [this.lastName, this.firstName] = [...name]
    }
}

const accountinfo = new AccountInfo('shinhan', '0000', 'danny', 'kim');
console.log(accountinfo.password)   // 0000
console.log(accountinfo.fullName)   // 이름은 kim danny입니다.


accountinfo.password = '7777'
console.log(accountinfo.password)  // 7777

accountinfo.fullName = ["park", "danny"]
console.log(accountinfo.fullName)  // 제 이름은 park danny입니다.