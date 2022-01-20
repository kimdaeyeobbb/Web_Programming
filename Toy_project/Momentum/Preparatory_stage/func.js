/* 함수 */
// 함수 - 반복해서 사용할 수 있는 코드 조각
// 프로그래머들은 게으르기 때문에 가능한 적게 코드를 작성하고 싶어한다
// 함수는 어떤 코드를 가져온 뒤 캡슐화해서 실행을 여러번 할 수 있게 해줌

console.log("Hello my name is ~"); 
// 이 코드를 이름만 바꿔서 쓸 수 있도록 함수화해보자



/* 함수 만들기 1 */
function sayHello(name, age){
    console.log("Hello my name is "+ name + " and I'm " + age +" years old.");
}

sayHello("KIM", 20);
sayHello("PARK", 21);
sayHello("LEE", 20);



/* 함수 만들기 2 */
function plus(a,b){
    console.log(a+b);
}

plus(8, 60);



/* 객체 & 함수 같이 이용  */
const player = {
    name: "KIM",
    sayHello: function(name2) {
        console.log("hello " + name2 + " nice to meet you" );
    },
};

console.log(player.name);
player.sayHello("PARK");