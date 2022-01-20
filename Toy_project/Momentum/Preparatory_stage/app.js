/* 리스트 사용이 싫을 경우 객체를 사용해 보자 */

const playerName = "nico";
const playerPoints = 121212;
const playerHandsome = false;
const plyaerFat = "little bit";

// const player = ["nico", 1212, false, "little bit"];
// 리스트 내 요소들이 무엇인지 알려주고 있지 않으므로 
// 리스트를 사용하는 것은 좋지 않다. 주석으로 설명 필요.
// 따라서 더 효율적인 객체를 사용해보자

/* 객체 생성 케이스 */
const player = {
    name : "nico",
    points : 10,
    fat : true,
};

console.log(player);
console.log(player.name);

/* 객체 생성 케이스 2 */
console.log(player["name"]);

player.fat = false;  
player.points = player.points+15;   // 10+15
// 객체내 요소 업데이트 가능
// const가 적용된 객체 자체는 업데이트 불가능

player.lastName = "potato"; 
// 객체 내 요소 추가

console.log(player);