// Object

// 1. 기본 형태
let newuser = {
    //key : value
    id: "licat",
    pw: "1234", // 81DC9BDB52D04DC20036DBD8313ED055 이렇게 저장합니다. ("MD5는 사용하지 않습니다.")
    name: "leehojun",
    email: "paul@weniv.com",
    active: true,
};

console.log(newuser["id"]);
// console.log(newuser[id]); // error
console.log(newuser.id);
// console.log(newuser."id");  // error




// 2. 아래와 같은 형태로 많이 사용됨
let user = [
    {
        //key : value
        id: "licat",
        pw: "1234", // 81DC9BDB52D04DC20036DBD8313ED055 이렇게 저장합니다. ("MD5는 사용하지 않습니다.")
        name: "leehojun",
        email: "paul@weniv.com",
        active: true,
    },
    {
        //key : value
        id: "lion",
        pw: "2345", // 81DC9BDB52D04DC20036DBD8313ED055 이렇게 저장합니다. ("MD5는 사용하지 않습니다.")
        name: "leehojin",
        email: "pa@weniv.com",
        active: true,
    },
];

console.log(user[0]["id"]);   // licat
console.log(user[1]["id"]);   // lion


console.log("---------- 3번")
// 3. 아래와 같이 선언이 가능함
let a = 10;
let b = 20;
let c = 30;
let e = { a, b, c };
console.log(e);   // { a: 10, b: 20, c: 30 }



console.log("---------- 4번")
// 4. 값을 변경할 수 있음
e["a"] = 50;
console.log(e);  // { a: 50, b: 20, c: 30 }




console.log("----------- 5번");
// 5. key 값으로 문자열 외에 다른 값을 넣었을 경우
let txt = 'hello';
let txt2 = {
    0: 'h',
    1: 'e',
    2: 'l',
    3: 'l',
    4: 'o'
}

console.log(txt[1]);   // e
console.log(txt2[1]);   // e. 유사 배열 객체 (뒤에서 다룸)

// map이 아래의 2개 코드가 실행되게 만들어줌
// console.log(txt2.1);  // error (map을 사용해야 이렇게 사용가능)
// console.log(txt2.{'one':1});


console.log("----------- 6번");

// // 6. value의 값으로 문자열 외에 다른 값을 넣었을 경우 
// (웹 콘솔창에 찍어서 확인해볼 것)
// let test = {
//     one: sum,
//     two: console.log,
//     three: window.innerWidth,
//     four: [10, 20, 30],
//     five: '10',
//     six: 100
// };

// console.log(test);   // 객체배열은 순서가 없다 (랜덤)
// test.two('댕댕이!!');



console.log("----------- 7번")

// 7. key와 value만 뽑아낼 수 없을까?
console.log(Object.keys(newuser));
console.log(Object.values(newuser));
console.log(Object.entries(newuser));   // key와 value의 쌍

// map에서 사용할 수 있음
// newuser.keys();
// newuser.values();
// newuser.entries();


console.log("------------- 8번")



// 8. object spread 용법
let 회원정보업데이트 = {
    // let newuser = {
    //     //key : value
    //     id: "licat",
    //     pw: "1234", // 81DC9BDB52D04DC20036DBD8313ED055 이렇게 저장합니다. ("MD5는 사용하지 않습니다.")
    //     name: "leehojun",
    //     email: "paul@weniv.com",
    //     active: true,
    // };
    name: 'cat',
    email: 'jun@naver.com',
}

// 회원정보업데이트 방법
newuser['name'] = 회원정보업데이트['name']
newuser['email'] = 회원정보업데이트['email']


// 뒤에 추가할 내용을 적어줌
newuser = { ...user, ...회원정보업데이트 };
console.log(newuser);


// 이렇게 바꾸면 2개다 바뀜
let newuser2 = newuser;
// 등호는 갖다가 넣는게 아니고 가리키는 개념임

newuser2["id"] = "helloworld";
console.log(newuser);
console.log(newuser2);


// spread 기법을 사용하면 원본을 만지지 않고 사용할 수 있음
let newuser2 = { ...newuser };
newuser2["id"] = "helloworld";
console.log(newuser);
console.log(newuser2);


// 함수는 후에 자세히 다룹니다.
function sum(x, y) {
    return x + y;
}

// TMI입니다. 뒤에서 다룰 내용이에요.
// console.log(typeof sum);
// sum.value = 'hojun';
// console.log(console.dir(sum));
// console.log(sum.value);
// console.log(typeof sum);



user5 = {
    name: 'kim',
    phone: '1234-5678',
}

console.log(user5);
// { name: 'kim', phone: '1234-5678' }


newuser5 = { ...user5, ...{ id: 'zzz', pw: '???' } };
// { name: 'kim', phone: '1234-5678', id: 'zzz', pw: '???' }

console.log(newuser5);

/* 주의 */

let newuser6 = newuser5;
// 이렇게 바꾸면 2개 요소 모두 바뀜

newuser6["id"] = "가나다";
console.log(newuser5);  // { name: 'kim', phone: '1234-5678', id: '가나다', pw: '???' }
console.log(newuser6); // { name: 'kim', phone: '1234-5678', id: '가나다', pw: '???' }


/* spread 기법 사용시 원본을 건드리지 않고 사용 가능 */
let newuser7 = { ...newuser5 };
newuser7["id"] = "ABCDEF";
console.log(newuser5); // { name: 'kim', phone: '1234-5678', id: '가나다', pw: '???' }
console.log(newuser7); // { name: 'kim', phone: '1234-5678', id: 'ABCDEF', pw: '???' }
