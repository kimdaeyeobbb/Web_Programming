// 인터페이스로 클래스 정의

interface Car{
    color: string;
    wheels: number;
    start(): void;
}


// 생성자 사용 X 
class Bmw implements Car{
    // Car 인터페이스에 존재하는 프로퍼티(속성)값들을 입력하지 않으면 에러 발생
    color: readonly;
    wheels = 4;
    start(){
        console.log("go!!");
    }
}



// 생성자 사용 O
class Bmw2 implements Car{
    // Car 인터페이스에 존재하는 프로퍼티(속성)값들을 입력하지 않으면 에러 발생
    color;
    wheels= 4;

    // 생성될 때 색상을 입력받음
    constructor(c:string){
        this.color = c;
    }

    start(): void {
        console.log("go!!!")
    }
}

const b = new Bmw2('blue');
console.log(b);
b.start();



// 인터페이스의 확장 (extends 키워드 사용)

interface Benz extends Car{
    //Car의 속성은 그대로 물려받고

    door:number;   // 함수 추가 정의
    stop(): void; // 함수 추가 정의
}

const benz: Benz ={
    color: 'black',
    wheels: 4,
    start(){},
// Car에 있던 프로퍼티를 적어줘야 에러가 안남

    door: 5,
    stop(){ 
        console.log("stop");
    }
}