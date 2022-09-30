let userData = [
    {
        _id: "63368beca2eb35561a82e095",
        index: 0,
        guid: "da420833-3f21-4788-8ec6-59339eb37057",
        age: 39,
        name: "Crane Henderson",
        gender: "male",
    },
    {
        _id: "63368becff56df1e67045508",
        index: 1,
        guid: "a6cf02b1-47fb-48c8-91a0-cdd189f1225a",
        age: 24,
        name: "Valentine Gardner",
        gender: "male",
    },
    {
        _id: "63368becf9509da973acc110",
        index: 2,
        guid: "a3645145-9ddc-4ba5-874e-7f51307f228c",
        age: 36,
        name: "Watts Nicholson",
        gender: "male",
    },
    {
        _id: "63368becb44127cac17b2bf3",
        index: 3,
        guid: "1880d14d-4c46-44a9-a76f-074eff80474b",
        age: 24,
        name: "Jasmine Green",
        gender: "female",
    },
    {
        _id: "63368becde89e8dcadcd25c3",
        index: 4,
        guid: "6d7c2d90-a5dc-41d4-8910-da153c99db5c",
        age: 36,
        name: "Juliana Burch",
        gender: "female",
    },
];

// console.log(Math.min(...[24, 36, 24, 37]));   // 24
console.log(Math.min(...userData.map((value) => value.age)));   // 24

console.log(Math.round(4.7));
console.log(Math.round(4.4));

console.log(Math.random() * 100);

console.log(Math.sqrt(64));   // 8

console.log(Math.abs(-10));   // 10s


console.log(123123123123123123123 + 2);   // 제대로 계산 X
console.log(BigInt(123123123123123123123) + BigInt(2));   // 제대로 계산 X
console.log(BigInt(123123123123123123123n) + BigInt(2n));   // 제대로 계산 O - BigInt의 n은 non-limited일 가능성이 있다

