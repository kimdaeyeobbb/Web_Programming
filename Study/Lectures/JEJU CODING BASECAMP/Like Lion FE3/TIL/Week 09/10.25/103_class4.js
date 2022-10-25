class Me {
    constructor(name, address, phoneNum) {
        this.name = name;
        this.address = address;
        this.phoneNum = phoneNum;
    }

    canWalk() {
        console.log('재현이가 걷는다.')
    }

    teaching(student) {
        student.levelUp();
    }
}

class Student {
    constructor(level) {
        this.level = level;
    }

    levelUp() {
        this.level++;
    }
}


const me = new Me('danny', '한양', '0102')
me.canWalk();


const student = new Student(1);
student.levelUp();
console.log(student)