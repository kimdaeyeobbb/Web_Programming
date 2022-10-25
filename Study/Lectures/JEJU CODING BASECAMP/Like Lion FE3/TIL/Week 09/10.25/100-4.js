function NewFactory(name) {
    this.name = name;   // this는 생성자함수를 통해 만들어진 인스턴스를 가리킴
    this.sayYourName = function () {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }
}


let robot1 = new NewFactory('브랜든');
console.log(robot1)   // robot1에는 인스턴스가 들어감 (name 프로퍼티와 sayYourName 프로퍼티를 가짐)
console.log(robot1.sayYourName())


let robot2 = new NewFactory('웨이드');   // 새로운 인스턴스 생성
robot1.name = '크크'

console.log(robot1.name)   // 크크
console.log(robot2.name)   // 웨이드