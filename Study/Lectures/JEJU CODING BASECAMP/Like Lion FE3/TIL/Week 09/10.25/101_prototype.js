function NewFactory(name) {
    this.name = name;
    this.sayYourName = function () {
        return (`삐리삐리. 제 이름은 ${this.name}입니다. 주인님.`)
    }
}


const robot1 = new NewFactory('게리')
const robot2 = new NewFactory('뮤라')
const robot3 = new NewFactory('알리')

console.log(robot1.sayYourName())
console.log(robot2.sayYourName())
console.log(robot3.sayYourName())
