function Me(name, address, phoneNum) {
    // 생성자 함수 
    this.name = name;   // 생성자 함수의 this는 인스턴스를 가리킴
    this.address = address;   // 생성자함수를 실행했을 떄 전달받는 address (생성자 함수의 this는 인스턴스를 가리키므로)
    this.phoneNum = phoneNum;
}

// 함수안에 들어있는 것은 prototype (프로토타입은 인스턴스에 존재하지 않음. 인스턴스에 존재하는 것은 __proto__임)
Me.prototype.canWalk = function () {
    console.log('웨이드가 걷는다.')
}

Me.prototype.teaching = function (student) {
    student.levelUp();
}

const me = new Me('웨이드', '제주시', '010-1234-5678')
console.log(me)
console.log(me.canWalk())

const me2 = new Me('웨이드', '제주시', '010-1234-5678')
console.log(me2.canWalk());
console.log(me.prototype === me2.prototype)



function Student(level) {
    this.level = level;   // 생성자함수가 실행될 때 전달받는 level
}

Student.prototype.levelUp = function () {
    this.level++;
}

const me3 = new Me('웨이드', '제주시', '010101003')
const student = new Student(1);   // 새로운 student 인스턴스 생성

me3.teaching(student);
console.log(student);   // 레벨이 2로 증가
me3.teaching(student)
console.log(student) // 레벨이 3으로 증가