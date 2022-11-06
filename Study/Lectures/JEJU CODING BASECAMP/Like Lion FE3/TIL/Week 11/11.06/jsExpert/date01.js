/* Date 사용 */
const time = new Date(); // time 객체 생성
console.log(time.getFullYear()); // 2022
console.log(time.getYear()); //
console.log(time.getMonth()); // 11월
console.log(time.getDate()); // 6일
console.log(time.getHours()); // 11시
console.log(time.getMinutes()); // 17분

console.log();

// 24시간을 12시간체계로 표현
const hours =
    time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
console.log(time.getHours());

const 오전오후 = time.getHours() > 12 ? "오후" : "오전";
const minutes =
    time.getMinutes() > 10 ? time.getMinutes() : "0" + time.getMinutes();
// 10보다 크다면 현재시간, 아니면 0을 붙여서 한자리수 '분'이 01,02,...09처럼 표시되게 만듦

const now = `지금은 ${오전오후} ${hours}시 ${minutes}분 입니다.`;
console.log(now);


console.log();


console.log(time.getUTCFullYear())  // 2022년
console.log(time.getUTCMonth())  // 11월
console.log(time.getUTCDate())  // 6일