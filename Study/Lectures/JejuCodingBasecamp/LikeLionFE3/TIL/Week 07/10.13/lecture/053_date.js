console.log(Date())   // Thu Oct 13 2022 15:25:02 GMT+0900 (대한민국 표준시)

let d = new Date();
console.log(d)  // 2022-10-13T06:26:35.553Z

console.log(d.getDate())  // 13

console.log(d.getMonth())   // +1 해야함. 0월부터 시작함

console.log(d.getDay())   // 0부터 시작 (0은 일요일)

switch (d.getDay) {
    case 0:
        console.log('일요일')
        break;
    case 1:
        console.log('월요일')
        break;
    case 2:
        console.log('화요일')
        break;
    case 3:
        console.log('수요일')
        break;
    case 4:
        console.log('목요일')
        break;
    case 5:
        console.log('금요일')
        break;
    case 6:
        console.log('토요일')
        break;
    default:
        console.log("날짜의 양식이 잘못되었습니다")
        break;
}

console.log(d.getHours())  // 15
console.log(d.getMinutes())  // 32
console.log(d.getHours() + 9)  // 24
console.log(d.getSeconds()) // 17
console.log(d.getFullYear())  // 2022
console.log(d.getYear())  // 1900년도부터 연도 계산. 이제 쓰지 않으므로 잊어버릴 것

/* 비교 -> 회사 컨벤션을 따라갈 것 */
console.log(new Date(2023, 0, 20, 10)) // 2023년 1월 20일 10시 , Fri Jan 20 2023 10:00:00 GMT+0900 (한국 표준시) -> 월이 0부터 시작
console.log(new Date('2023/1/20/10:00:00'));  // Fri Jan 20 2023 10:00:00 GMT+0900 (한국 표준시) -> 월이 1부터 시작 

today = new Date()
console.log(d.getTimezoneOffset() / 60)  // -9 (-9시간) => UTC와 today의 지정 로캘 KST와의 차이는 -9시간 (UTC는 브라우저 시간)

today = new Date() // today의 지정 로캘은 KST다.

//UTC와 today의 지정 로캘 KST와의 차이는 -9시간이다.
today.getTimezoneOffset() / 60



console.log(today.toString())
console.log(today.toTimeString())

today.toString();     // -> Fri Jul 24 2020 12:30:00 GMT+0900 (대한민국 표준시)
today.toTimeString(); // -> 12:30:00 GMT+0900 (대한민국 표준시)

today = new Date('2023/1/20/10:00:00')
today.toString();
today.toISOString();   // 한국 기준 시간
today.toISOString().slice(0, 10);
today.toISOString().slice(0, 10).replace(/-/g, '')


/* toLocaleString(a-b) => a:언어-b:국가코드 설정 */

//http://www.w3bai.com/ko/tags/ref_language_codes.html#gsc.tab=0
//http://www.w3bai.com/ko/tags/ref_country_codes.html#gsc.tab=0
today.toLocaleString('ko-KR'); // -> 2020. 7. 24. 오후 12:30:00
today.toLocaleString('en-US'); // -> 7/24/2020, 12:30:00 PM
today.toLocaleString('ja-JP'); // -> 2020/7/24 12:30:00


const dayNames = [
    '(일요일)',
    '(월요일)',
    '(화요일)',
    '(수요일)',
    '(목요일)',
    '(금요일)',
    '(토요일)'
];
// getDay 메서드는 해당 요일(0 ~ 6)을 나타내는 정수를 반환한다.
const day = dayNames[today.getDay()];

const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
const ampm = hour >= 12 ? 'PM' : 'AM';