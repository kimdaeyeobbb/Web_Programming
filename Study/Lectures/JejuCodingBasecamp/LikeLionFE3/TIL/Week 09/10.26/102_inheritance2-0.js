function Parent() {
    this.name = 'danny'
}

Parent.prototype.rename = function (name) {
    this.name = name;
}

Parent.prototype.sayName = function () {
    console.log(this.name);
}

const parent = new Parent();
console.log(parent)   // Parent {name: 'danny'} , [[Prototype]]: Object

function Child() {
    Parent.call(this);
    // call을 통해서 this가 child와 parent가 연결되어 있으므로 parent내의 this.name을 child의 것처럼 사용할 수 있게 됨
    // 그렇기 때문에 name을 가지게 된 것임  
}

/* Child의 prototype을 Parent의 prototype으로 연결시켜주고 있음 
-> 앞으로 생성되는 Child의 인스턴스들은 모두 Parent의 prototype을 참조하게 됨 
-> parent의 메서드들을 상속받아서 이용할 수 있게 됨 */
// Object.create 실행시 Parent.prototype을 가지는 (참조하고 있는) 새로운 객체를 만들어서 새로운 prototype에 할당하는 것
// Object.create -> Parent.prototype을 바라보는 객체를 만들어서 Child.prototype에 할당하는 것 
Child.prototype = Object.create(Parent.prototype)


Child.prototype.canWalk = function () {
    console.log('now i can walk')
}

const child = new Child();   // 인스턴스 생성
console.log(child)    // Child {name: 'danny'}  , [[Prototype]]: Parent -> name 프로퍼티를 상속받음


console.log(child.__proto__ === Child.prototype)   // true