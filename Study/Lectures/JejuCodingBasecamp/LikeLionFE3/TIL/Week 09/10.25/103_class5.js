class Robot {
    // 클래스의 생성자 함수입니다. 하나의 클래스는 하나의 생성자만 정의할 수 있습니다. 
    // 그리고 생성자 함수는 new 키워드가 호출될때 자동으로 실행됩니다.
    constructor(name) {
        // constructor -> 생성자 함수. 반드시 한 클래스당 하나만 정의됨. 한 클래스 당 한번만 사용 가능 
        this.name = name;
    }

    // 메소드를 정의합니다. 메소드는 클래스가 생성한 인스턴스를 통해 사용할 수 있습니다.
    sayYourName() {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }
}


class BabyRobot extends Robot {
    constructor(name) {
        super(name);   // super를 통해 부모의 프로퍼티를 상속받음. super는 부모의 생성자함수를 참조함
        this.ownName = '아이크';
    }

    sayBabyName() {
        // 또한 상속을 받게되면 부모 클래스의 메소드를 사용할 수 있게 됩니다. 때문에 this로 접근 할 수 있습니다.
        this.sayYourName();   // 상속을 통해 BabyRobot내에 sayYourName이 들어와있으므로 해당 인스턴스의 메서드를 사용함
        console.log('Suceeding you, Father!');
    }
}

const babyRobot = new BabyRobot('DANNY');
babyRobot.sayBabyName();